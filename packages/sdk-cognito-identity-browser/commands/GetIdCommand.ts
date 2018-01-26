import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetId} from '../model/GetId';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetIdInput} from '../types/GetIdInput';
import {GetIdOutput} from '../types/GetIdOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class GetIdCommand implements __aws_types.Command<
    InputTypesUnion,
    GetIdInput,
    OutputTypesUnion,
    GetIdOutput,
    CognitoIdentityResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GetIdInput, GetIdOutput, ReadableStream>();

    constructor(readonly input: GetIdInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<GetIdInput, GetIdOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetId
        };

        return stack.resolve(
            handler<GetIdInput, GetIdOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}