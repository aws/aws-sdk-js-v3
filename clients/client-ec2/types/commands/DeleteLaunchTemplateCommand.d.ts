import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteLaunchTemplateRequest, DeleteLaunchTemplateResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLaunchTemplateCommandInput = DeleteLaunchTemplateRequest;
export declare type DeleteLaunchTemplateCommandOutput = DeleteLaunchTemplateResult & __MetadataBearer;
export declare class DeleteLaunchTemplateCommand extends $Command<DeleteLaunchTemplateCommandInput, DeleteLaunchTemplateCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteLaunchTemplateCommandInput;
    constructor(input: DeleteLaunchTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLaunchTemplateCommandInput, DeleteLaunchTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
