import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetLaunchTemplateDataRequest, GetLaunchTemplateDataResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLaunchTemplateDataCommandInput = GetLaunchTemplateDataRequest;
export declare type GetLaunchTemplateDataCommandOutput = GetLaunchTemplateDataResult & __MetadataBearer;
export declare class GetLaunchTemplateDataCommand extends $Command<GetLaunchTemplateDataCommandInput, GetLaunchTemplateDataCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetLaunchTemplateDataCommandInput;
    constructor(input: GetLaunchTemplateDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLaunchTemplateDataCommandInput, GetLaunchTemplateDataCommandOutput>;
    private serialize;
    private deserialize;
}
