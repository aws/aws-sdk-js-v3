import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeParametersRequest, DescribeParametersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeParametersCommandInput = DescribeParametersRequest;
export declare type DescribeParametersCommandOutput = DescribeParametersResult & __MetadataBearer;
export declare class DescribeParametersCommand extends $Command<DescribeParametersCommandInput, DescribeParametersCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeParametersCommandInput;
    constructor(input: DescribeParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeParametersCommandInput, DescribeParametersCommandOutput>;
    private serialize;
    private deserialize;
}
