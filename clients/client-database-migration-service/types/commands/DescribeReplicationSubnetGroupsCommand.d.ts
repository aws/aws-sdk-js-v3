import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationSubnetGroupsMessage, DescribeReplicationSubnetGroupsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReplicationSubnetGroupsCommandInput = DescribeReplicationSubnetGroupsMessage;
export declare type DescribeReplicationSubnetGroupsCommandOutput = DescribeReplicationSubnetGroupsResponse & __MetadataBearer;
export declare class DescribeReplicationSubnetGroupsCommand extends $Command<DescribeReplicationSubnetGroupsCommandInput, DescribeReplicationSubnetGroupsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationSubnetGroupsCommandInput;
    constructor(input: DescribeReplicationSubnetGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationSubnetGroupsCommandInput, DescribeReplicationSubnetGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
