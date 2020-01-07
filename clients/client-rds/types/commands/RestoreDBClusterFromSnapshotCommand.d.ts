import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBClusterFromSnapshotMessage, RestoreDBClusterFromSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreDBClusterFromSnapshotCommandInput = RestoreDBClusterFromSnapshotMessage;
export declare type RestoreDBClusterFromSnapshotCommandOutput = RestoreDBClusterFromSnapshotResult & __MetadataBearer;
export declare class RestoreDBClusterFromSnapshotCommand extends $Command<RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput, RDSClientResolvedConfig> {
    readonly input: RestoreDBClusterFromSnapshotCommandInput;
    constructor(input: RestoreDBClusterFromSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreDBClusterFromSnapshotCommandInput, RestoreDBClusterFromSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
