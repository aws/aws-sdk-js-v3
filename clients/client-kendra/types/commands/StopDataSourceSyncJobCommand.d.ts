import { ServiceInputTypes, ServiceOutputTypes, kendraClientResolvedConfig } from "../kendraClient";
import { StopDataSourceSyncJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopDataSourceSyncJobCommandInput = StopDataSourceSyncJobRequest;
export declare type StopDataSourceSyncJobCommandOutput = __MetadataBearer;
export declare class StopDataSourceSyncJobCommand extends $Command<StopDataSourceSyncJobCommandInput, StopDataSourceSyncJobCommandOutput, kendraClientResolvedConfig> {
    readonly input: StopDataSourceSyncJobCommandInput;
    constructor(input: StopDataSourceSyncJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: kendraClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDataSourceSyncJobCommandInput, StopDataSourceSyncJobCommandOutput>;
    private serialize;
    private deserialize;
}
