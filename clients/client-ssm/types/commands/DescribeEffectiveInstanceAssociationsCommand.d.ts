import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeEffectiveInstanceAssociationsRequest, DescribeEffectiveInstanceAssociationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEffectiveInstanceAssociationsCommandInput = DescribeEffectiveInstanceAssociationsRequest;
export declare type DescribeEffectiveInstanceAssociationsCommandOutput = DescribeEffectiveInstanceAssociationsResult & __MetadataBearer;
export declare class DescribeEffectiveInstanceAssociationsCommand extends $Command<DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeEffectiveInstanceAssociationsCommandInput;
    constructor(input: DescribeEffectiveInstanceAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
