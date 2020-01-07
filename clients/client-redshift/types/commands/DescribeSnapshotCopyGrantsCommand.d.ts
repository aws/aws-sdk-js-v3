import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeSnapshotCopyGrantsMessage, SnapshotCopyGrantMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSnapshotCopyGrantsCommandInput = DescribeSnapshotCopyGrantsMessage;
export declare type DescribeSnapshotCopyGrantsCommandOutput = SnapshotCopyGrantMessage & __MetadataBearer;
export declare class DescribeSnapshotCopyGrantsCommand extends $Command<DescribeSnapshotCopyGrantsCommandInput, DescribeSnapshotCopyGrantsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeSnapshotCopyGrantsCommandInput;
    constructor(input: DescribeSnapshotCopyGrantsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotCopyGrantsCommandInput, DescribeSnapshotCopyGrantsCommandOutput>;
    private serialize;
    private deserialize;
}
