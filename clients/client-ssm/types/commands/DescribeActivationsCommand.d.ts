import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeActivationsRequest, DescribeActivationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeActivationsCommandInput = DescribeActivationsRequest;
export declare type DescribeActivationsCommandOutput = DescribeActivationsResult & __MetadataBearer;
export declare class DescribeActivationsCommand extends $Command<DescribeActivationsCommandInput, DescribeActivationsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeActivationsCommandInput;
    constructor(input: DescribeActivationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeActivationsCommandInput, DescribeActivationsCommandOutput>;
    private serialize;
    private deserialize;
}
