import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DetachDiskRequest, DetachDiskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachDiskCommandInput = DetachDiskRequest;
export declare type DetachDiskCommandOutput = DetachDiskResult & __MetadataBearer;
export declare class DetachDiskCommand extends $Command<DetachDiskCommandInput, DetachDiskCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DetachDiskCommandInput;
    constructor(input: DetachDiskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachDiskCommandInput, DetachDiskCommandOutput>;
    private serialize;
    private deserialize;
}
