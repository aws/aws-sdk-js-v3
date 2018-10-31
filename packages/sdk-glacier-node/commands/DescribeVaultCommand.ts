import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DescribeVault} from '../model/DescribeVault';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeVaultInput} from '../types/DescribeVaultInput';
import {DescribeVaultOutput} from '../types/DescribeVaultOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class DescribeVaultCommand implements __aws_types.Command<
    InputTypesUnion,
    DescribeVaultInput,
    OutputTypesUnion,
    DescribeVaultOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DescribeVaultInput,
        DescribeVaultOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeVaultInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<DescribeVaultInput, DescribeVaultOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeVault
        };

        return stack.resolve(
            handler<DescribeVaultInput, DescribeVaultOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}