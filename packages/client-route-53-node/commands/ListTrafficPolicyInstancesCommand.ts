import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListTrafficPolicyInstances} from '../model/ListTrafficPolicyInstances';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListTrafficPolicyInstancesInput} from '../types/ListTrafficPolicyInstancesInput';
import {ListTrafficPolicyInstancesOutput} from '../types/ListTrafficPolicyInstancesOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class ListTrafficPolicyInstancesCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListTrafficPolicyInstancesInput,
    OutputTypesUnion,
    ListTrafficPolicyInstancesOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListTrafficPolicyInstancesInput,
        ListTrafficPolicyInstancesOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListTrafficPolicyInstancesInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<ListTrafficPolicyInstancesInput, ListTrafficPolicyInstancesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListTrafficPolicyInstances
        };

        return stack.resolve(
            handler<ListTrafficPolicyInstancesInput, ListTrafficPolicyInstancesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}