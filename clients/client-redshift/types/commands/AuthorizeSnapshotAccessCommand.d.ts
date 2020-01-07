import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AuthorizeSnapshotAccessMessage, AuthorizeSnapshotAccessResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AuthorizeSnapshotAccessCommandInput = AuthorizeSnapshotAccessMessage;
export declare type AuthorizeSnapshotAccessCommandOutput = AuthorizeSnapshotAccessResult & __MetadataBearer;
export declare class AuthorizeSnapshotAccessCommand extends $Command<AuthorizeSnapshotAccessCommandInput, AuthorizeSnapshotAccessCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: AuthorizeSnapshotAccessCommandInput;
    constructor(input: AuthorizeSnapshotAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AuthorizeSnapshotAccessCommandInput, AuthorizeSnapshotAccessCommandOutput>;
    private serialize;
    private deserialize;
}
