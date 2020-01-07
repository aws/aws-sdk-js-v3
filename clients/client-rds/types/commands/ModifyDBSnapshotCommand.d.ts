import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBSnapshotMessage, ModifyDBSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBSnapshotCommandInput = ModifyDBSnapshotMessage;
export declare type ModifyDBSnapshotCommandOutput = ModifyDBSnapshotResult & __MetadataBearer;
export declare class ModifyDBSnapshotCommand extends $Command<ModifyDBSnapshotCommandInput, ModifyDBSnapshotCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBSnapshotCommandInput;
    constructor(input: ModifyDBSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBSnapshotCommandInput, ModifyDBSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
