import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeEndpointsMessage, DescribeEndpointsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEndpointsCommandInput = DescribeEndpointsMessage;
export declare type DescribeEndpointsCommandOutput = DescribeEndpointsResponse & __MetadataBearer;
export declare class DescribeEndpointsCommand extends $Command<DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeEndpointsCommandInput;
    constructor(input: DescribeEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
