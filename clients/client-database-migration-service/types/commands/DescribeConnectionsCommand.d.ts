import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeConnectionsMessage, DescribeConnectionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeConnectionsCommandInput = DescribeConnectionsMessage;
export declare type DescribeConnectionsCommandOutput = DescribeConnectionsResponse & __MetadataBearer;
export declare class DescribeConnectionsCommand extends $Command<DescribeConnectionsCommandInput, DescribeConnectionsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeConnectionsCommandInput;
    constructor(input: DescribeConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeConnectionsCommandInput, DescribeConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
