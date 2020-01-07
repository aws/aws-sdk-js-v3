import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVolumesRequest, DescribeVolumesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVolumesCommandInput = DescribeVolumesRequest;
export declare type DescribeVolumesCommandOutput = DescribeVolumesResult & __MetadataBearer;
export declare class DescribeVolumesCommand extends $Command<DescribeVolumesCommandInput, DescribeVolumesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVolumesCommandInput;
    constructor(input: DescribeVolumesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVolumesCommandInput, DescribeVolumesCommandOutput>;
    private serialize;
    private deserialize;
}
