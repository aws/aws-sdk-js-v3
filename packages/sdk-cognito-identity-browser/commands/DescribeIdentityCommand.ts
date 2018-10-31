import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {DescribeIdentity} from '../model/DescribeIdentity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeIdentityInput} from '../types/DescribeIdentityInput';
import {DescribeIdentityOutput} from '../types/DescribeIdentityOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class DescribeIdentityCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeIdentityInput,
    OutputTypesUnion,
    DescribeIdentityOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeIdentityInput,
        DescribeIdentityOutput,
        Blob
    >();

    constructor(readonly input: DescribeIdentityInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<DescribeIdentityInput, DescribeIdentityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeIdentity
        };

        return stack.resolve(
            handler<DescribeIdentityInput, DescribeIdentityOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}