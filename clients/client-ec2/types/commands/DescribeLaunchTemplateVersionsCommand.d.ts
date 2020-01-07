import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLaunchTemplateVersionsRequest, DescribeLaunchTemplateVersionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLaunchTemplateVersionsCommandInput = DescribeLaunchTemplateVersionsRequest;
export declare type DescribeLaunchTemplateVersionsCommandOutput = DescribeLaunchTemplateVersionsResult & __MetadataBearer;
export declare class DescribeLaunchTemplateVersionsCommand extends $Command<DescribeLaunchTemplateVersionsCommandInput, DescribeLaunchTemplateVersionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLaunchTemplateVersionsCommandInput;
    constructor(input: DescribeLaunchTemplateVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLaunchTemplateVersionsCommandInput, DescribeLaunchTemplateVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
