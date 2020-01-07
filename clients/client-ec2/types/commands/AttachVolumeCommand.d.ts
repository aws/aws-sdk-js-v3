import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachVolumeRequest, VolumeAttachment } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachVolumeCommandInput = AttachVolumeRequest;
export declare type AttachVolumeCommandOutput = VolumeAttachment & __MetadataBearer;
export declare class AttachVolumeCommand extends $Command<AttachVolumeCommandInput, AttachVolumeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AttachVolumeCommandInput;
    constructor(input: AttachVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachVolumeCommandInput, AttachVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
