import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { StartDataSourceSyncJobRequest, StartDataSourceSyncJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartDataSourceSyncJobCommandInput = StartDataSourceSyncJobRequest;
export declare type StartDataSourceSyncJobCommandOutput = StartDataSourceSyncJobResponse & __MetadataBearer;
export declare class StartDataSourceSyncJobCommand extends $Command<StartDataSourceSyncJobCommandInput, StartDataSourceSyncJobCommandOutput, kendraClientResolvedConfig> {
    readonly input: StartDataSourceSyncJobCommandInput;
    constructor(input: StartDataSourceSyncJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDataSourceSyncJobCommandInput, StartDataSourceSyncJobCommandOutput>;
    private serialize;
    private deserialize;
}
