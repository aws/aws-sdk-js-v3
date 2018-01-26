import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {UnlinkIdentity} from '../model/UnlinkIdentity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UnlinkIdentityInput} from '../types/UnlinkIdentityInput';
import {UnlinkIdentityOutput} from '../types/UnlinkIdentityOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class UnlinkIdentityCommand implements __aws_types.Command<
    InputTypesUnion,
    UnlinkIdentityInput,
    OutputTypesUnion,
    UnlinkIdentityOutput,
    CognitoIdentityResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<UnlinkIdentityInput, UnlinkIdentityOutput, ReadableStream>();

    constructor(readonly input: UnlinkIdentityInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<UnlinkIdentityInput, UnlinkIdentityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UnlinkIdentity
        };

        return stack.resolve(
            handler<UnlinkIdentityInput, UnlinkIdentityOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}