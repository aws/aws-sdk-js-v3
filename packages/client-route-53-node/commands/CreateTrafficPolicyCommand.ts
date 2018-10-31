import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateTrafficPolicy} from '../model/CreateTrafficPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateTrafficPolicyInput} from '../types/CreateTrafficPolicyInput';
import {CreateTrafficPolicyOutput} from '../types/CreateTrafficPolicyOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class CreateTrafficPolicyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateTrafficPolicyInput,
    OutputTypesUnion,
    CreateTrafficPolicyOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateTrafficPolicyInput,
        CreateTrafficPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateTrafficPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateTrafficPolicyInput, CreateTrafficPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateTrafficPolicy
        };

        return stack.resolve(
            handler<CreateTrafficPolicyInput, CreateTrafficPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}