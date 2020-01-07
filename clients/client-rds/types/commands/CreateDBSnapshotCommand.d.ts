import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { CreateDBSnapshotMessage, CreateDBSnapshotResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDBSnapshotCommandInput = CreateDBSnapshotMessage;
export declare type CreateDBSnapshotCommandOutput = CreateDBSnapshotResult & __MetadataBearer;
export declare class CreateDBSnapshotCommand extends $Command<CreateDBSnapshotCommandInput, CreateDBSnapshotCommandOutput, RDSClientResolvedConfig> {
    readonly input: CreateDBSnapshotCommandInput;
    constructor(input: CreateDBSnapshotCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDBSnapshotCommandInput, CreateDBSnapshotCommandOutput>;
    private serialize;
    private deserialize;
}
