import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetMaintenanceWindowExecutionTaskInvocationRequest, GetMaintenanceWindowExecutionTaskInvocationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMaintenanceWindowExecutionTaskInvocationCommandInput = GetMaintenanceWindowExecutionTaskInvocationRequest;
export declare type GetMaintenanceWindowExecutionTaskInvocationCommandOutput = GetMaintenanceWindowExecutionTaskInvocationResult & __MetadataBearer;
export declare class GetMaintenanceWindowExecutionTaskInvocationCommand extends $Command<GetMaintenanceWindowExecutionTaskInvocationCommandInput, GetMaintenanceWindowExecutionTaskInvocationCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetMaintenanceWindowExecutionTaskInvocationCommandInput;
    constructor(input: GetMaintenanceWindowExecutionTaskInvocationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMaintenanceWindowExecutionTaskInvocationCommandInput, GetMaintenanceWindowExecutionTaskInvocationCommandOutput>;
    private serialize;
    private deserialize;
}
