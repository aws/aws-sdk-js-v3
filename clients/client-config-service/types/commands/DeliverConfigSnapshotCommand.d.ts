import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeliverConfigSnapshotRequest, DeliverConfigSnapshotResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeliverConfigSnapshotCommandInput = DeliverConfigSnapshotRequest;
export declare type DeliverConfigSnapshotCommandOutput = DeliverConfigSnapshotResponse & __MetadataBearer;
export declare class DeliverConfigSnapshotCommand extends $Command<DeliverConfigSnapshotCommandInput, DeliverConfigSnapshotCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DeliverConfigSnapshotCommandInput;
    constructor(input: DeliverConfigSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeliverConfigSnapshotCommandInput, DeliverConfigSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
