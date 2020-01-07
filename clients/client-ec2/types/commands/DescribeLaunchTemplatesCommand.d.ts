import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLaunchTemplatesRequest, DescribeLaunchTemplatesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLaunchTemplatesCommandInput = DescribeLaunchTemplatesRequest;
export declare type DescribeLaunchTemplatesCommandOutput = DescribeLaunchTemplatesResult & __MetadataBearer;
export declare class DescribeLaunchTemplatesCommand extends $Command<DescribeLaunchTemplatesCommandInput, DescribeLaunchTemplatesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLaunchTemplatesCommandInput;
    constructor(input: DescribeLaunchTemplatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLaunchTemplatesCommandInput, DescribeLaunchTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
