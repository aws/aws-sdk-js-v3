import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeOrderableReplicationInstancesMessage, DescribeOrderableReplicationInstancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrderableReplicationInstancesCommandInput = DescribeOrderableReplicationInstancesMessage;
export declare type DescribeOrderableReplicationInstancesCommandOutput = DescribeOrderableReplicationInstancesResponse & __MetadataBearer;
export declare class DescribeOrderableReplicationInstancesCommand extends $Command<DescribeOrderableReplicationInstancesCommandInput, DescribeOrderableReplicationInstancesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeOrderableReplicationInstancesCommandInput;
    constructor(input: DescribeOrderableReplicationInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrderableReplicationInstancesCommandInput, DescribeOrderableReplicationInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
