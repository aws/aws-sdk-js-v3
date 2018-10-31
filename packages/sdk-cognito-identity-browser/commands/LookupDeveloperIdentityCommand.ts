import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {LookupDeveloperIdentity} from '../model/LookupDeveloperIdentity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {LookupDeveloperIdentityInput} from '../types/LookupDeveloperIdentityInput';
import {LookupDeveloperIdentityOutput} from '../types/LookupDeveloperIdentityOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class LookupDeveloperIdentityCommand implements __aws_types.Command<
    InputTypesUnion,
    LookupDeveloperIdentityInput,
    OutputTypesUnion,
    LookupDeveloperIdentityOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        LookupDeveloperIdentityInput,
        LookupDeveloperIdentityOutput,
        Blob
    >();

    constructor(readonly input: LookupDeveloperIdentityInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<LookupDeveloperIdentityInput, LookupDeveloperIdentityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: LookupDeveloperIdentity
        };

        return stack.resolve(
            handler<LookupDeveloperIdentityInput, LookupDeveloperIdentityOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}