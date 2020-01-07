import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { AttachDiskRequest, AttachDiskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachDiskCommandInput = AttachDiskRequest;
export declare type AttachDiskCommandOutput = AttachDiskResult & __MetadataBearer;
export declare class AttachDiskCommand extends $Command<AttachDiskCommandInput, AttachDiskCommandOutput, LightsailClientResolvedConfig> {
    readonly input: AttachDiskCommandInput;
    constructor(input: AttachDiskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachDiskCommandInput, AttachDiskCommandOutput>;
    private serialize;
    private deserialize;
}
