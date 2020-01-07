import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeReservedNodesMessage, ReservedNodesMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReservedNodesCommandInput = DescribeReservedNodesMessage;
export declare type DescribeReservedNodesCommandOutput = ReservedNodesMessage & __MetadataBearer;
export declare class DescribeReservedNodesCommand extends $Command<DescribeReservedNodesCommandInput, DescribeReservedNodesCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeReservedNodesCommandInput;
    constructor(input: DescribeReservedNodesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReservedNodesCommandInput, DescribeReservedNodesCommandOutput>;
    private serialize;
    private deserialize;
}
