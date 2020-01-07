import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeEndpointTypesMessage, DescribeEndpointTypesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEndpointTypesCommandInput = DescribeEndpointTypesMessage;
export declare type DescribeEndpointTypesCommandOutput = DescribeEndpointTypesResponse & __MetadataBearer;
export declare class DescribeEndpointTypesCommand extends $Command<DescribeEndpointTypesCommandInput, DescribeEndpointTypesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeEndpointTypesCommandInput;
    constructor(input: DescribeEndpointTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointTypesCommandInput, DescribeEndpointTypesCommandOutput>;
    private serialize;
    private deserialize;
}
