import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribeReplicationTaskAssessmentResultsMessage, DescribeReplicationTaskAssessmentResultsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReplicationTaskAssessmentResultsCommandInput = DescribeReplicationTaskAssessmentResultsMessage;
export declare type DescribeReplicationTaskAssessmentResultsCommandOutput = DescribeReplicationTaskAssessmentResultsResponse & __MetadataBearer;
export declare class DescribeReplicationTaskAssessmentResultsCommand extends $Command<DescribeReplicationTaskAssessmentResultsCommandInput, DescribeReplicationTaskAssessmentResultsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribeReplicationTaskAssessmentResultsCommandInput;
    constructor(input: DescribeReplicationTaskAssessmentResultsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReplicationTaskAssessmentResultsCommandInput, DescribeReplicationTaskAssessmentResultsCommandOutput>;
    private serialize;
    private deserialize;
}
