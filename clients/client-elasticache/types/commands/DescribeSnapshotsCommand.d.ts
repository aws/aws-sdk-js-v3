import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeSnapshotsListMessage, DescribeSnapshotsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSnapshotsCommandInput = DescribeSnapshotsMessage;
export declare type DescribeSnapshotsCommandOutput = DescribeSnapshotsListMessage & __MetadataBearer;
export declare class DescribeSnapshotsCommand extends $Command<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeSnapshotsCommandInput;
    constructor(input: DescribeSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotsCommandInput, DescribeSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
