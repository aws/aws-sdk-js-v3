import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseSnapshotsRequest, GetRelationalDatabaseSnapshotsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseSnapshotsCommandInput = GetRelationalDatabaseSnapshotsRequest;
export declare type GetRelationalDatabaseSnapshotsCommandOutput = GetRelationalDatabaseSnapshotsResult & __MetadataBearer;
export declare class GetRelationalDatabaseSnapshotsCommand extends $Command<GetRelationalDatabaseSnapshotsCommandInput, GetRelationalDatabaseSnapshotsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseSnapshotsCommandInput;
    constructor(input: GetRelationalDatabaseSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseSnapshotsCommandInput, GetRelationalDatabaseSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
