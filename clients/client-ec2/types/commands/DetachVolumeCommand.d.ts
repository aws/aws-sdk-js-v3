import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachVolumeRequest, VolumeAttachment } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachVolumeCommandInput = DetachVolumeRequest;
export declare type DetachVolumeCommandOutput = VolumeAttachment & __MetadataBearer;
export declare class DetachVolumeCommand extends $Command<DetachVolumeCommandInput, DetachVolumeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DetachVolumeCommandInput;
    constructor(input: DetachVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachVolumeCommandInput, DetachVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
