import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVolumeAttributeRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVolumeAttributeCommandInput = ModifyVolumeAttributeRequest;
export declare type ModifyVolumeAttributeCommandOutput = __MetadataBearer;
export declare class ModifyVolumeAttributeCommand extends $Command<ModifyVolumeAttributeCommandInput, ModifyVolumeAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVolumeAttributeCommandInput;
    constructor(input: ModifyVolumeAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVolumeAttributeCommandInput, ModifyVolumeAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
