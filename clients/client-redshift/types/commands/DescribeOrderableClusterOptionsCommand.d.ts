import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeOrderableClusterOptionsMessage, OrderableClusterOptionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrderableClusterOptionsCommandInput = DescribeOrderableClusterOptionsMessage;
export declare type DescribeOrderableClusterOptionsCommandOutput = OrderableClusterOptionsMessage & __MetadataBearer;
export declare class DescribeOrderableClusterOptionsCommand extends $Command<DescribeOrderableClusterOptionsCommandInput, DescribeOrderableClusterOptionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeOrderableClusterOptionsCommandInput;
    constructor(input: DescribeOrderableClusterOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrderableClusterOptionsCommandInput, DescribeOrderableClusterOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
