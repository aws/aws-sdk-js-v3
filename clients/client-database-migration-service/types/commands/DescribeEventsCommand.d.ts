import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeEventsMessage, DescribeEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventsCommandInput = DescribeEventsMessage;
export declare type DescribeEventsCommandOutput = DescribeEventsResponse & __MetadataBearer;
export declare class DescribeEventsCommand extends $Command<DescribeEventsCommandInput, DescribeEventsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeEventsCommandInput;
    constructor(input: DescribeEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventsCommandInput, DescribeEventsCommandOutput>;
    private serialize;
    private deserialize;
}
