import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeRemediationExceptionsRequest, DescribeRemediationExceptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRemediationExceptionsCommandInput = DescribeRemediationExceptionsRequest;
export declare type DescribeRemediationExceptionsCommandOutput = DescribeRemediationExceptionsResponse & __MetadataBearer;
export declare class DescribeRemediationExceptionsCommand extends $Command<DescribeRemediationExceptionsCommandInput, DescribeRemediationExceptionsCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeRemediationExceptionsCommandInput;
    constructor(input: DescribeRemediationExceptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRemediationExceptionsCommandInput, DescribeRemediationExceptionsCommandOutput>;
    private serialize;
    private deserialize;
}
