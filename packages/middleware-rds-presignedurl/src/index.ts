import {
    MetadataBearer,
    Middleware,
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    Provider,
} from '@aws/types';

const arnPattern = "arn:[\\w+=/,.@-]+:[\\w+=/,.@-]+:([\\w+=/,.@-]*)?:[0-9]+:[\\w+=/,.@-]+(:[\\w+=/,.@-]+)?(:[\\w+=/,.@-]+)?";

export function buildCrossRegionPresignedUrl<
    Input extends {[index: string]: any},
    Output extends MetadataBearer   
>(
    sourceIdentifierKeyName: string,
    regionProvider: Provider<string>
): Middleware<Input, Output> {
    return (
        next: Handler<Input, Output>,
        context: HandlerExecutionContext
    ): Handler<Input, Output> => async (
        {input}: HandlerArguments<Input>
    ): Promise<Output> => {
        const sourceIdentifier = input[sourceIdentifierKeyName] as string || (function(){
            throw new Error(`required member name ${sourceIdentifierKeyName}.`)
        })();
        const region = await regionProvider();
        if (isARN(sourceIdentifier)) {
            const sourceEndpoint = getEndpointFromARN(sourceIdentifier);
            if (region !== sourceEndpoint) {
                
            }
        }
        return next({input});
    }
}

function isARN(id: string): boolean {
    const regARN = new RegExp(arnPattern);
    return regARN.test(id)
}

function getEndpointFromARN(arn: string): string {
    const arnArr = arn.split(':');
    if(arnArr.length < 3) {
        throw new Error(`Cannot infer endpoint from '${arn}'`);
    }
    return arnArr[3];
}
