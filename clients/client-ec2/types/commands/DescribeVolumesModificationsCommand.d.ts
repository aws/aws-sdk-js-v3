import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeVolumesModificationsRequest, DescribeVolumesModificationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeVolumesModificationsCommandInput = DescribeVolumesModificationsRequest;
export declare type DescribeVolumesModificationsCommandOutput = DescribeVolumesModificationsResult & __MetadataBearer;
export declare class DescribeVolumesModificationsCommand extends $Command<DescribeVolumesModificationsCommandInput, DescribeVolumesModificationsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeVolumesModificationsCommandInput;
    constructor(input: DescribeVolumesModificationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeVolumesModificationsCommandInput, DescribeVolumesModificationsCommandOutput>;
    private serialize;
    private deserialize;
}
