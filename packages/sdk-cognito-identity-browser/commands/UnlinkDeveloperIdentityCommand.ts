import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {UnlinkDeveloperIdentity} from '../model/UnlinkDeveloperIdentity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UnlinkDeveloperIdentityInput} from '../types/UnlinkDeveloperIdentityInput';
import {UnlinkDeveloperIdentityOutput} from '../types/UnlinkDeveloperIdentityOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class UnlinkDeveloperIdentityCommand implements __aws_types.Command<
    InputTypesUnion,
    UnlinkDeveloperIdentityInput,
    OutputTypesUnion,
    UnlinkDeveloperIdentityOutput,
    CognitoIdentityResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UnlinkDeveloperIdentityInput,
        UnlinkDeveloperIdentityOutput,
        ReadableStream
    >();

    constructor(readonly input: UnlinkDeveloperIdentityInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<UnlinkDeveloperIdentityInput, UnlinkDeveloperIdentityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UnlinkDeveloperIdentity
        };

        return stack.resolve(
            handler<UnlinkDeveloperIdentityInput, UnlinkDeveloperIdentityOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}