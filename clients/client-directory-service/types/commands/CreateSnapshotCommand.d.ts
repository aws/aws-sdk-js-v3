import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CreateSnapshotRequest, CreateSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSnapshotCommandInput = CreateSnapshotRequest;
export declare type CreateSnapshotCommandOutput = CreateSnapshotResult & __MetadataBearer;
export declare class CreateSnapshotCommand extends $Command<CreateSnapshotCommandInput, CreateSnapshotCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CreateSnapshotCommandInput;
    constructor(input: CreateSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotCommandInput, CreateSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
