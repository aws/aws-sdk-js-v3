import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBSnapshotMessage, DescribeDBSnapshotsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBSnapshotsCommandInput = DescribeDBSnapshotsMessage;
export declare type DescribeDBSnapshotsCommandOutput = DBSnapshotMessage & __MetadataBearer;
export declare class DescribeDBSnapshotsCommand extends $Command<DescribeDBSnapshotsCommandInput, DescribeDBSnapshotsCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBSnapshotsCommandInput;
    constructor(input: DescribeDBSnapshotsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBSnapshotsCommandInput, DescribeDBSnapshotsCommandOutput>;
    private serialize;
    private deserialize;
}
