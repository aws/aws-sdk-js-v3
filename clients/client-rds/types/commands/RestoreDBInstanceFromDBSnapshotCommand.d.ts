import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBInstanceFromDBSnapshotMessage, RestoreDBInstanceFromDBSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreDBInstanceFromDBSnapshotCommandInput = RestoreDBInstanceFromDBSnapshotMessage;
export declare type RestoreDBInstanceFromDBSnapshotCommandOutput = RestoreDBInstanceFromDBSnapshotResult & __MetadataBearer;
export declare class RestoreDBInstanceFromDBSnapshotCommand extends $Command<RestoreDBInstanceFromDBSnapshotCommandInput, RestoreDBInstanceFromDBSnapshotCommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBInstanceFromDBSnapshotCommandInput;
    constructor(input: RestoreDBInstanceFromDBSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBInstanceFromDBSnapshotCommandInput, RestoreDBInstanceFromDBSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
