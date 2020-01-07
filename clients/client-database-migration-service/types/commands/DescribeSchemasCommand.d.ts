import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeSchemasMessage, DescribeSchemasResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSchemasCommandInput = DescribeSchemasMessage;
export declare type DescribeSchemasCommandOutput = DescribeSchemasResponse & __MetadataBearer;
export declare class DescribeSchemasCommand extends $Command<DescribeSchemasCommandInput, DescribeSchemasCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeSchemasCommandInput;
    constructor(input: DescribeSchemasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSchemasCommandInput, DescribeSchemasCommandOutput>;
    private serialize;
    private deserialize;
}
