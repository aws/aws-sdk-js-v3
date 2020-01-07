import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeEventCategoriesMessage, DescribeEventCategoriesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventCategoriesCommandInput = DescribeEventCategoriesMessage;
export declare type DescribeEventCategoriesCommandOutput = DescribeEventCategoriesResponse & __MetadataBearer;
export declare class DescribeEventCategoriesCommand extends $Command<DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeEventCategoriesCommandInput;
    constructor(input: DescribeEventCategoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventCategoriesCommandInput, DescribeEventCategoriesCommandOutput>;
    private serialize;
    private deserialize;
}
