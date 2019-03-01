import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteSamplingRule} from '../model/DeleteSamplingRule';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteSamplingRuleInput} from '../types/DeleteSamplingRuleInput';
import {DeleteSamplingRuleOutput} from '../types/DeleteSamplingRuleOutput';
import {XRayResolvedConfiguration} from '../XRayConfiguration';
export * from '../types/DeleteSamplingRuleInput';
export * from '../types/DeleteSamplingRuleOutput';
export * from '../types/DeleteSamplingRuleExceptionsUnion';

export class DeleteSamplingRuleCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteSamplingRuleInput,
    OutputTypesUnion,
    DeleteSamplingRuleOutput,
    XRayResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteSamplingRuleInput,
        DeleteSamplingRuleOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteSamplingRuleInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: XRayResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteSamplingRuleInput, DeleteSamplingRuleOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteSamplingRule
        };

        return stack.resolve(
            handler<DeleteSamplingRuleInput, DeleteSamplingRuleOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}