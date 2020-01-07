import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVolumeAttributeRequest, DescribeVolumeAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVolumeAttributeCommandInput = DescribeVolumeAttributeRequest;
export declare type DescribeVolumeAttributeCommandOutput = DescribeVolumeAttributeResult & __MetadataBearer;
export declare class DescribeVolumeAttributeCommand extends $Command<DescribeVolumeAttributeCommandInput, DescribeVolumeAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVolumeAttributeCommandInput;
    constructor(input: DescribeVolumeAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVolumeAttributeCommandInput, DescribeVolumeAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
