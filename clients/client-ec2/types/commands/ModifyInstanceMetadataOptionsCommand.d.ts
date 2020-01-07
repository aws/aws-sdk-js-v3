import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceMetadataOptionsRequest, ModifyInstanceMetadataOptionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyInstanceMetadataOptionsCommandInput = ModifyInstanceMetadataOptionsRequest;
export declare type ModifyInstanceMetadataOptionsCommandOutput = ModifyInstanceMetadataOptionsResult & __MetadataBearer;
export declare class ModifyInstanceMetadataOptionsCommand extends $Command<ModifyInstanceMetadataOptionsCommandInput, ModifyInstanceMetadataOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyInstanceMetadataOptionsCommandInput;
    constructor(input: ModifyInstanceMetadataOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceMetadataOptionsCommandInput, ModifyInstanceMetadataOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
