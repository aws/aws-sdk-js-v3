import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVolumeStatusRequest, DescribeVolumeStatusResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVolumeStatusCommandInput = DescribeVolumeStatusRequest;
export declare type DescribeVolumeStatusCommandOutput = DescribeVolumeStatusResult & __MetadataBearer;
export declare class DescribeVolumeStatusCommand extends $Command<DescribeVolumeStatusCommandInput, DescribeVolumeStatusCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVolumeStatusCommandInput;
    constructor(input: DescribeVolumeStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVolumeStatusCommandInput, DescribeVolumeStatusCommandOutput>;
    private serialize;
    private deserialize;
}
