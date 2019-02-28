import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GenerateRandom} from '../model/GenerateRandom';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GenerateRandomInput} from '../types/GenerateRandomInput';
import {GenerateRandomOutput} from '../types/GenerateRandomOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/GenerateRandomInput';
export * from '../types/GenerateRandomOutput';
export * from '../types/GenerateRandomExceptionsUnion';

export class GenerateRandomCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GenerateRandomInput,
    OutputTypesUnion,
    GenerateRandomOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GenerateRandomInput,
        GenerateRandomOutput,
        Blob
    >();

    constructor(readonly input: GenerateRandomInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<GenerateRandomInput, GenerateRandomOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GenerateRandom
        };

        return stack.resolve(
            handler<GenerateRandomInput, GenerateRandomOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}