import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyInstanceAttributeCommandInput = ModifyInstanceAttributeRequest;
export declare type ModifyInstanceAttributeCommandOutput = __MetadataBearer;
export declare class ModifyInstanceAttributeCommand extends $Command<ModifyInstanceAttributeCommandInput, ModifyInstanceAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyInstanceAttributeCommandInput;
    constructor(input: ModifyInstanceAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceAttributeCommandInput, ModifyInstanceAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
