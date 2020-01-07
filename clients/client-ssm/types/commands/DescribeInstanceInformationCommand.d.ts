import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInstanceInformationRequest, DescribeInstanceInformationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstanceInformationCommandInput = DescribeInstanceInformationRequest;
export declare type DescribeInstanceInformationCommandOutput = DescribeInstanceInformationResult & __MetadataBearer;
export declare class DescribeInstanceInformationCommand extends $Command<DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInstanceInformationCommandInput;
    constructor(input: DescribeInstanceInformationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput>;
    private serialize;
    private deserialize;
}
