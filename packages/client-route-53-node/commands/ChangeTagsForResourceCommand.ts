import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ChangeTagsForResource} from '../model/ChangeTagsForResource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ChangeTagsForResourceInput} from '../types/ChangeTagsForResourceInput';
import {ChangeTagsForResourceOutput} from '../types/ChangeTagsForResourceOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class ChangeTagsForResourceCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ChangeTagsForResourceInput,
    OutputTypesUnion,
    ChangeTagsForResourceOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ChangeTagsForResourceInput,
        ChangeTagsForResourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: ChangeTagsForResourceInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<ChangeTagsForResourceInput, ChangeTagsForResourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ChangeTagsForResource
        };

        return stack.resolve(
            handler<ChangeTagsForResourceInput, ChangeTagsForResourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}