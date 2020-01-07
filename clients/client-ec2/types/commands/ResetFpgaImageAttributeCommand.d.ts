import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ResetFpgaImageAttributeRequest, ResetFpgaImageAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetFpgaImageAttributeCommandInput = ResetFpgaImageAttributeRequest;
export declare type ResetFpgaImageAttributeCommandOutput = ResetFpgaImageAttributeResult & __MetadataBearer;
export declare class ResetFpgaImageAttributeCommand extends $Command<ResetFpgaImageAttributeCommandInput, ResetFpgaImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ResetFpgaImageAttributeCommandInput;
    constructor(input: ResetFpgaImageAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetFpgaImageAttributeCommandInput, ResetFpgaImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
