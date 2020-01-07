import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { GetSnapshotLimitsRequest, GetSnapshotLimitsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSnapshotLimitsCommandInput = GetSnapshotLimitsRequest;
export declare type GetSnapshotLimitsCommandOutput = GetSnapshotLimitsResult & __MetadataBearer;
export declare class GetSnapshotLimitsCommand extends $Command<GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: GetSnapshotLimitsCommandInput;
    constructor(input: GetSnapshotLimitsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSnapshotLimitsCommandInput, GetSnapshotLimitsCommandOutput>;
    private serialize;
    private deserialize;
}
