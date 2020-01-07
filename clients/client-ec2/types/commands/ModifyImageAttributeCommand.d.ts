import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyImageAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyImageAttributeCommandInput = ModifyImageAttributeRequest;
export declare type ModifyImageAttributeCommandOutput = __MetadataBearer;
export declare class ModifyImageAttributeCommand extends $Command<ModifyImageAttributeCommandInput, ModifyImageAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyImageAttributeCommandInput;
    constructor(input: ModifyImageAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyImageAttributeCommandInput, ModifyImageAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
