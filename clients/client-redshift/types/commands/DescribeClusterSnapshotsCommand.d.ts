import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeClusterSnapshotsMessage, SnapshotMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClusterSnapshotsCommandInput = DescribeClusterSnapshotsMessage;
export declare type DescribeClusterSnapshotsCommandOutput = SnapshotMessage & __MetadataBearer;
export declare class DescribeClusterSnapshotsCommand extends $Command<DescribeClusterSnapshotsCommandInput, DescribeClusterSnapshotsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeClusterSnapshotsCommandInput;
    constructor(input: DescribeClusterSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClusterSnapshotsCommandInput, DescribeClusterSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
