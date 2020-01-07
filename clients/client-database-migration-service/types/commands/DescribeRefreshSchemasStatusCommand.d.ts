import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeRefreshSchemasStatusMessage, DescribeRefreshSchemasStatusResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRefreshSchemasStatusCommandInput = DescribeRefreshSchemasStatusMessage;
export declare type DescribeRefreshSchemasStatusCommandOutput = DescribeRefreshSchemasStatusResponse & __MetadataBearer;
export declare class DescribeRefreshSchemasStatusCommand extends $Command<DescribeRefreshSchemasStatusCommandInput, DescribeRefreshSchemasStatusCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeRefreshSchemasStatusCommandInput;
    constructor(input: DescribeRefreshSchemasStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRefreshSchemasStatusCommandInput, DescribeRefreshSchemasStatusCommandOutput>;
    private serialize;
    private deserialize;
}
