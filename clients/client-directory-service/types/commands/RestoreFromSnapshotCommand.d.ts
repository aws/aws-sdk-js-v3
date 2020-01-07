import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { RestoreFromSnapshotRequest, RestoreFromSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreFromSnapshotCommandInput = RestoreFromSnapshotRequest;
export declare type RestoreFromSnapshotCommandOutput = RestoreFromSnapshotResult & __MetadataBearer;
export declare class RestoreFromSnapshotCommand extends $Command<RestoreFromSnapshotCommandInput, RestoreFromSnapshotCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: RestoreFromSnapshotCommandInput;
    constructor(input: RestoreFromSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreFromSnapshotCommandInput, RestoreFromSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
