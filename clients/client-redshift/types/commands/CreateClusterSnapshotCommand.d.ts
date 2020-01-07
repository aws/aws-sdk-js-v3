import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateClusterSnapshotMessage, CreateClusterSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateClusterSnapshotCommandInput = CreateClusterSnapshotMessage;
export declare type CreateClusterSnapshotCommandOutput = CreateClusterSnapshotResult & __MetadataBearer;
export declare class CreateClusterSnapshotCommand extends $Command<CreateClusterSnapshotCommandInput, CreateClusterSnapshotCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateClusterSnapshotCommandInput;
    constructor(input: CreateClusterSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateClusterSnapshotCommandInput, CreateClusterSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
