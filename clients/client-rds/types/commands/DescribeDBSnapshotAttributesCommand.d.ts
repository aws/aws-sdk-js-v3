import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBSnapshotAttributesMessage, DescribeDBSnapshotAttributesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDBSnapshotAttributesCommandInput = DescribeDBSnapshotAttributesMessage;
export declare type DescribeDBSnapshotAttributesCommandOutput = DescribeDBSnapshotAttributesResult & __MetadataBearer;
export declare class DescribeDBSnapshotAttributesCommand extends $Command<DescribeDBSnapshotAttributesCommandInput, DescribeDBSnapshotAttributesCommandOutput, RDSClientResolvedConfig> {
    readonly input: DescribeDBSnapshotAttributesCommandInput;
    constructor(input: DescribeDBSnapshotAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDBSnapshotAttributesCommandInput, DescribeDBSnapshotAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
