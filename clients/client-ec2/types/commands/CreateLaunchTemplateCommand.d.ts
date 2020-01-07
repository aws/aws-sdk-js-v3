import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLaunchTemplateRequest, CreateLaunchTemplateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLaunchTemplateCommandInput = CreateLaunchTemplateRequest;
export declare type CreateLaunchTemplateCommandOutput = CreateLaunchTemplateResult & __MetadataBearer;
export declare class CreateLaunchTemplateCommand extends $Command<CreateLaunchTemplateCommandInput, CreateLaunchTemplateCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateLaunchTemplateCommandInput;
    constructor(input: CreateLaunchTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLaunchTemplateCommandInput, CreateLaunchTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
