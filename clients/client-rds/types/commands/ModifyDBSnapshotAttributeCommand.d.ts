import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBSnapshotAttributeMessage, ModifyDBSnapshotAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBSnapshotAttributeCommandInput = ModifyDBSnapshotAttributeMessage;
export declare type ModifyDBSnapshotAttributeCommandOutput = ModifyDBSnapshotAttributeResult & __MetadataBearer;
export declare class ModifyDBSnapshotAttributeCommand extends $Command<ModifyDBSnapshotAttributeCommandInput, ModifyDBSnapshotAttributeCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBSnapshotAttributeCommandInput;
    constructor(input: ModifyDBSnapshotAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBSnapshotAttributeCommandInput, ModifyDBSnapshotAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
