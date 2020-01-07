import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DescribeDBClusterSnapshotAttributesMessage, DescribeDBClusterSnapshotAttributesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBClusterSnapshotAttributesCommandInput = DescribeDBClusterSnapshotAttributesMessage;
export declare type DescribeDBClusterSnapshotAttributesCommandOutput = DescribeDBClusterSnapshotAttributesResult & __MetadataBearer;
export declare class DescribeDBClusterSnapshotAttributesCommand extends $Command<DescribeDBClusterSnapshotAttributesCommandInput, DescribeDBClusterSnapshotAttributesCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribeDBClusterSnapshotAttributesCommandInput;
    constructor(input: DescribeDBClusterSnapshotAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBClusterSnapshotAttributesCommandInput, DescribeDBClusterSnapshotAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
