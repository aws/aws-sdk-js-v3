import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeEngineDefaultParametersMessage, DescribeEngineDefaultParametersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEngineDefaultParametersCommandInput = DescribeEngineDefaultParametersMessage;
export declare type DescribeEngineDefaultParametersCommandOutput = DescribeEngineDefaultParametersResult & __MetadataBearer;
export declare class DescribeEngineDefaultParametersCommand extends $Command<DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeEngineDefaultParametersCommandInput;
    constructor(input: DescribeEngineDefaultParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEngineDefaultParametersCommandInput, DescribeEngineDefaultParametersCommandOutput>;
    private serialize;
    private deserialize;
}
