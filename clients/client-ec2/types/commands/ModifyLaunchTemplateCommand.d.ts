import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyLaunchTemplateRequest, ModifyLaunchTemplateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyLaunchTemplateCommandInput = ModifyLaunchTemplateRequest;
export declare type ModifyLaunchTemplateCommandOutput = ModifyLaunchTemplateResult & __MetadataBearer;
export declare class ModifyLaunchTemplateCommand extends $Command<ModifyLaunchTemplateCommandInput, ModifyLaunchTemplateCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyLaunchTemplateCommandInput;
    constructor(input: ModifyLaunchTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyLaunchTemplateCommandInput, ModifyLaunchTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
