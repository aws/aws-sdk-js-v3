import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeTableRestoreStatusMessage, TableRestoreStatusMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTableRestoreStatusCommandInput = DescribeTableRestoreStatusMessage;
export declare type DescribeTableRestoreStatusCommandOutput = TableRestoreStatusMessage & __MetadataBearer;
export declare class DescribeTableRestoreStatusCommand extends $Command<DescribeTableRestoreStatusCommandInput, DescribeTableRestoreStatusCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeTableRestoreStatusCommandInput;
    constructor(input: DescribeTableRestoreStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTableRestoreStatusCommandInput, DescribeTableRestoreStatusCommandOutput>;
    private serialize;
    private deserialize;
}
