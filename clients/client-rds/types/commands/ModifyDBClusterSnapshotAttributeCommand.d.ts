import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyDBClusterSnapshotAttributeMessage, ModifyDBClusterSnapshotAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDBClusterSnapshotAttributeCommandInput = ModifyDBClusterSnapshotAttributeMessage;
export declare type ModifyDBClusterSnapshotAttributeCommandOutput = ModifyDBClusterSnapshotAttributeResult & __MetadataBearer;
export declare class ModifyDBClusterSnapshotAttributeCommand extends $Command<ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput, RDSClientResolvedConfig> {
    readonly input: ModifyDBClusterSnapshotAttributeCommandInput;
    constructor(input: ModifyDBClusterSnapshotAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDBClusterSnapshotAttributeCommandInput, ModifyDBClusterSnapshotAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
