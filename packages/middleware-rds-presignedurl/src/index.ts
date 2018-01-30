import {
    MetadataBearer,
    Middleware,
    Handler,
    HandlerArguments,
    HandlerExecutionContext,
    Provider,
} from '@aws/types';

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
    ): Handler<Input, Output> => (
        {input}: HandlerArguments<Input>
    ): Promise<Output> => {
        const sourceIdentifier = input[sourceIdentifierKeyName] as string || function(){
            throw new Error(`required member name ${sourceIdentifierKeyName}.`)
        }
        if (isARN(sourceIdentifierKeyName)) {

        }
        return next({input});
    }
}

function isARN(id: string): boolean {
    const regARN = new RegExp("arn:[\\w+=/,.@-]+:[\\w+=/,.@-]+:([\\w+=/,.@-]*)?:[0-9]+:[\\w+=/,.@-]+(:[\\w+=/,.@-]+)?(:[\\w+=/,.@-]+)?");
    return regARN.test(id)
}

function getEndpointFromARN(arn: string): string {
    const endpoint = arn.split(':')[3];
    
}
