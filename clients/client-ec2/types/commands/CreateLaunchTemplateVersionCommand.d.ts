import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLaunchTemplateVersionRequest, CreateLaunchTemplateVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLaunchTemplateVersionCommandInput = CreateLaunchTemplateVersionRequest;
export declare type CreateLaunchTemplateVersionCommandOutput = CreateLaunchTemplateVersionResult & __MetadataBearer;
export declare class CreateLaunchTemplateVersionCommand extends $Command<CreateLaunchTemplateVersionCommandInput, CreateLaunchTemplateVersionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateLaunchTemplateVersionCommandInput;
    constructor(input: CreateLaunchTemplateVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLaunchTemplateVersionCommandInput, CreateLaunchTemplateVersionCommandOutput>;
    private serialize;
    private deserialize;
}
