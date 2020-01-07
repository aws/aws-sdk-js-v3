import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeSnapshotsRequest, DescribeSnapshotsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSnapshotsCommandInput = DescribeSnapshotsRequest;
export declare type DescribeSnapshotsCommandOutput = DescribeSnapshotsResult & __MetadataBearer;
export declare class DescribeSnapshotsCommand extends $Command<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeSnapshotsCommandInput;
    constructor(input: DescribeSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
