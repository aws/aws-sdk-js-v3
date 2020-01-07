import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateSnapshotMessage, CreateSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSnapshotCommandInput = CreateSnapshotMessage;
export declare type CreateSnapshotCommandOutput = CreateSnapshotResult & __MetadataBearer;
export declare class CreateSnapshotCommand extends $Command<CreateSnapshotCommandInput, CreateSnapshotCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateSnapshotCommandInput;
    constructor(input: CreateSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
