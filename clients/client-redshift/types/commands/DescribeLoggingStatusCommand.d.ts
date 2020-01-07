import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeLoggingStatusMessage, LoggingStatus } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLoggingStatusCommandInput = DescribeLoggingStatusMessage;
export declare type DescribeLoggingStatusCommandOutput = LoggingStatus & __MetadataBearer;
export declare class DescribeLoggingStatusCommand extends $Command<DescribeLoggingStatusCommandInput, DescribeLoggingStatusCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeLoggingStatusCommandInput;
    constructor(input: DescribeLoggingStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLoggingStatusCommandInput, DescribeLoggingStatusCommandOutput>;
    private serialize;
    private deserialize;
}
