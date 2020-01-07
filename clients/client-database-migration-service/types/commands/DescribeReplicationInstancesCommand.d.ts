import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationInstancesMessage, DescribeReplicationInstancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReplicationInstancesCommandInput = DescribeReplicationInstancesMessage;
export declare type DescribeReplicationInstancesCommandOutput = DescribeReplicationInstancesResponse & __MetadataBearer;
export declare class DescribeReplicationInstancesCommand extends $Command<DescribeReplicationInstancesCommandInput, DescribeReplicationInstancesCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationInstancesCommandInput;
    constructor(input: DescribeReplicationInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationInstancesCommandInput, DescribeReplicationInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
