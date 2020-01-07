import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyFpgaImageAttributeRequest, ModifyFpgaImageAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyFpgaImageAttributeCommandInput = ModifyFpgaImageAttributeRequest;
export declare type ModifyFpgaImageAttributeCommandOutput = ModifyFpgaImageAttributeResult & __MetadataBearer;
export declare class ModifyFpgaImageAttributeCommand extends $Command<ModifyFpgaImageAttributeCommandInput, ModifyFpgaImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyFpgaImageAttributeCommandInput;
    constructor(input: ModifyFpgaImageAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyFpgaImageAttributeCommandInput, ModifyFpgaImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
