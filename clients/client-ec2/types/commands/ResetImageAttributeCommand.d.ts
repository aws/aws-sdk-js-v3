import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetImageAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetImageAttributeCommandInput = ResetImageAttributeRequest;
export declare type ResetImageAttributeCommandOutput = __MetadataBearer;
export declare class ResetImageAttributeCommand extends $Command<ResetImageAttributeCommandInput, ResetImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetImageAttributeCommandInput;
    constructor(input: ResetImageAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetImageAttributeCommandInput, ResetImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
