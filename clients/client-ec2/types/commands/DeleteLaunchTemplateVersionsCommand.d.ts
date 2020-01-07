import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteLaunchTemplateVersionsRequest, DeleteLaunchTemplateVersionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLaunchTemplateVersionsCommandInput = DeleteLaunchTemplateVersionsRequest;
export declare type DeleteLaunchTemplateVersionsCommandOutput = DeleteLaunchTemplateVersionsResult & __MetadataBearer;
export declare class DeleteLaunchTemplateVersionsCommand extends $Command<DeleteLaunchTemplateVersionsCommandInput, DeleteLaunchTemplateVersionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteLaunchTemplateVersionsCommandInput;
    constructor(input: DeleteLaunchTemplateVersionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLaunchTemplateVersionsCommandInput, DeleteLaunchTemplateVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
