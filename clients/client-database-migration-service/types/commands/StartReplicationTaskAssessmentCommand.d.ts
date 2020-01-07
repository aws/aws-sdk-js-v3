import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { StartReplicationTaskAssessmentMessage, StartReplicationTaskAssessmentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartReplicationTaskAssessmentCommandInput = StartReplicationTaskAssessmentMessage;
export declare type StartReplicationTaskAssessmentCommandOutput = StartReplicationTaskAssessmentResponse & __MetadataBearer;
export declare class StartReplicationTaskAssessmentCommand extends $Command<StartReplicationTaskAssessmentCommandInput, StartReplicationTaskAssessmentCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: StartReplicationTaskAssessmentCommandInput;
    constructor(input: StartReplicationTaskAssessmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartReplicationTaskAssessmentCommandInput, StartReplicationTaskAssessmentCommandOutput>;
    private serialize;
    private deserialize;
}
