import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { CreateDBClusterSnapshotMessage, CreateDBClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBClusterSnapshotCommandInput = CreateDBClusterSnapshotMessage;
export declare type CreateDBClusterSnapshotCommandOutput = CreateDBClusterSnapshotResult & __MetadataBearer;
export declare class CreateDBClusterSnapshotCommand extends $Command<CreateDBClusterSnapshotCommandInput, CreateDBClusterSnapshotCommandOutput, DocDBClientResolvedConfig> {
    readonly input: CreateDBClusterSnapshotCommandInput;
    constructor(input: CreateDBClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBClusterSnapshotCommandInput, CreateDBClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
