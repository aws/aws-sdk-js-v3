import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetAutoSnapshotsRequest, GetAutoSnapshotsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAutoSnapshotsCommandInput = GetAutoSnapshotsRequest;
export declare type GetAutoSnapshotsCommandOutput = GetAutoSnapshotsResult & __MetadataBearer;
export declare class GetAutoSnapshotsCommand extends $Command<GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetAutoSnapshotsCommandInput;
    constructor(input: GetAutoSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAutoSnapshotsCommandInput, GetAutoSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
