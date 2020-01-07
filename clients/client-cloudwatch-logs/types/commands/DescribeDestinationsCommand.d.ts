import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DescribeDestinationsRequest, DescribeDestinationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDestinationsCommandInput = DescribeDestinationsRequest;
export declare type DescribeDestinationsCommandOutput = DescribeDestinationsResponse & __MetadataBearer;
export declare class DescribeDestinationsCommand extends $Command<DescribeDestinationsCommandInput, DescribeDestinationsCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DescribeDestinationsCommandInput;
    constructor(input: DescribeDestinationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDestinationsCommandInput, DescribeDestinationsCommandOutput>;
    private serialize;
    private deserialize;
}
