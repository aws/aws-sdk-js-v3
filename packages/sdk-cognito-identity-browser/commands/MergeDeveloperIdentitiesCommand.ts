import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {MergeDeveloperIdentities} from '../model/MergeDeveloperIdentities';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {MergeDeveloperIdentitiesInput} from '../types/MergeDeveloperIdentitiesInput';
import {MergeDeveloperIdentitiesOutput} from '../types/MergeDeveloperIdentitiesOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class MergeDeveloperIdentitiesCommand implements __aws_types.Command<
    InputTypesUnion,
    MergeDeveloperIdentitiesInput,
    OutputTypesUnion,
    MergeDeveloperIdentitiesOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        MergeDeveloperIdentitiesInput,
        MergeDeveloperIdentitiesOutput,
        Blob
    >();

    constructor(readonly input: MergeDeveloperIdentitiesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<MergeDeveloperIdentitiesInput, MergeDeveloperIdentitiesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: MergeDeveloperIdentities
        };

        return stack.resolve(
            handler<MergeDeveloperIdentitiesInput, MergeDeveloperIdentitiesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}