import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DBClusterSnapshotMessage, DescribeDBClusterSnapshotsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBClusterSnapshotsCommandInput = DescribeDBClusterSnapshotsMessage;
export declare type DescribeDBClusterSnapshotsCommandOutput = DBClusterSnapshotMessage & __MetadataBearer;
export declare class DescribeDBClusterSnapshotsCommand extends $Command<DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DescribeDBClusterSnapshotsCommandInput;
    constructor(input: DescribeDBClusterSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterSnapshotsCommandInput, DescribeDBClusterSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
