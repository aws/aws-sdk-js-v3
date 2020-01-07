import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DetachVolumeInput, DetachVolumeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachVolumeCommandInput = DetachVolumeInput;
export declare type DetachVolumeCommandOutput = DetachVolumeOutput & __MetadataBearer;
export declare class DetachVolumeCommand extends $Command<DetachVolumeCommandInput, DetachVolumeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DetachVolumeCommandInput;
    constructor(input: DetachVolumeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachVolumeCommandInput, DetachVolumeCommandOutput>;
    private serialize;
    private deserialize;
}
