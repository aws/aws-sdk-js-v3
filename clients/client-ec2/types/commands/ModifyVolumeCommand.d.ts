import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVolumeRequest, ModifyVolumeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyVolumeCommandInput = ModifyVolumeRequest;
export declare type ModifyVolumeCommandOutput = ModifyVolumeResult & __MetadataBearer;
export declare class ModifyVolumeCommand extends $Command<ModifyVolumeCommandInput, ModifyVolumeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVolumeCommandInput;
    constructor(input: ModifyVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVolumeCommandInput, ModifyVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
