import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { CreateSnapshotCopyGrantMessage, CreateSnapshotCopyGrantResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSnapshotCopyGrantCommandInput = CreateSnapshotCopyGrantMessage;
export declare type CreateSnapshotCopyGrantCommandOutput = CreateSnapshotCopyGrantResult & __MetadataBearer;
export declare class CreateSnapshotCopyGrantCommand extends $Command<CreateSnapshotCopyGrantCommandInput, CreateSnapshotCopyGrantCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: CreateSnapshotCopyGrantCommandInput;
    constructor(input: CreateSnapshotCopyGrantCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSnapshotCopyGrantCommandInput, CreateSnapshotCopyGrantCommandOutput>;
    private serialize;
    private deserialize;
}
