import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInstanceAssociationsStatusRequest, DescribeInstanceAssociationsStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstanceAssociationsStatusCommandInput = DescribeInstanceAssociationsStatusRequest;
export declare type DescribeInstanceAssociationsStatusCommandOutput = DescribeInstanceAssociationsStatusResult & __MetadataBearer;
export declare class DescribeInstanceAssociationsStatusCommand extends $Command<DescribeInstanceAssociationsStatusCommandInput, DescribeInstanceAssociationsStatusCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInstanceAssociationsStatusCommandInput;
    constructor(input: DescribeInstanceAssociationsStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceAssociationsStatusCommandInput, DescribeInstanceAssociationsStatusCommandOutput>;
    private serialize;
    private deserialize;
}
