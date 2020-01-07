import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetMaintenanceWindowExecutionTaskRequest, GetMaintenanceWindowExecutionTaskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMaintenanceWindowExecutionTaskCommandInput = GetMaintenanceWindowExecutionTaskRequest;
export declare type GetMaintenanceWindowExecutionTaskCommandOutput = GetMaintenanceWindowExecutionTaskResult & __MetadataBearer;
export declare class GetMaintenanceWindowExecutionTaskCommand extends $Command<GetMaintenanceWindowExecutionTaskCommandInput, GetMaintenanceWindowExecutionTaskCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetMaintenanceWindowExecutionTaskCommandInput;
    constructor(input: GetMaintenanceWindowExecutionTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMaintenanceWindowExecutionTaskCommandInput, GetMaintenanceWindowExecutionTaskCommandOutput>;
    private serialize;
    private deserialize;
}
