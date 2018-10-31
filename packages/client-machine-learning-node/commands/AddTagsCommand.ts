import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {AddTags} from '../model/AddTags';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {AddTagsInput} from '../types/AddTagsInput';
import {AddTagsOutput} from '../types/AddTagsOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class AddTagsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    AddTagsInput,
    OutputTypesUnion,
    AddTagsOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        AddTagsInput,
        AddTagsOutput,
        _stream.Readable
    >();

    constructor(readonly input: AddTagsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_sdk_types.Handler<AddTagsInput, AddTagsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: AddTags
        };

        return stack.resolve(
            handler<AddTagsInput, AddTagsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}