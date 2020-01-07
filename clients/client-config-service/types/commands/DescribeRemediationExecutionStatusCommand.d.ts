import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeRemediationExecutionStatusRequest, DescribeRemediationExecutionStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRemediationExecutionStatusCommandInput = DescribeRemediationExecutionStatusRequest;
export declare type DescribeRemediationExecutionStatusCommandOutput = DescribeRemediationExecutionStatusResponse & __MetadataBearer;
export declare class DescribeRemediationExecutionStatusCommand extends $Command<DescribeRemediationExecutionStatusCommandInput, DescribeRemediationExecutionStatusCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeRemediationExecutionStatusCommandInput;
    constructor(input: DescribeRemediationExecutionStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRemediationExecutionStatusCommandInput, DescribeRemediationExecutionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
