import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RevokeSnapshotAccessMessage, RevokeSnapshotAccessResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeSnapshotAccessCommandInput = RevokeSnapshotAccessMessage;
export declare type RevokeSnapshotAccessCommandOutput = RevokeSnapshotAccessResult & __MetadataBearer;
export declare class RevokeSnapshotAccessCommand extends $Command<RevokeSnapshotAccessCommandInput, RevokeSnapshotAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RevokeSnapshotAccessCommandInput;
    constructor(input: RevokeSnapshotAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeSnapshotAccessCommandInput, RevokeSnapshotAccessCommandOutput>;
    private serialize;
    private deserialize;
}
