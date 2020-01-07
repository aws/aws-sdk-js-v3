import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetMaintenanceWindowExecutionRequest, GetMaintenanceWindowExecutionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMaintenanceWindowExecutionCommandInput = GetMaintenanceWindowExecutionRequest;
export declare type GetMaintenanceWindowExecutionCommandOutput = GetMaintenanceWindowExecutionResult & __MetadataBearer;
export declare class GetMaintenanceWindowExecutionCommand extends $Command<GetMaintenanceWindowExecutionCommandInput, GetMaintenanceWindowExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetMaintenanceWindowExecutionCommandInput;
    constructor(input: GetMaintenanceWindowExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMaintenanceWindowExecutionCommandInput, GetMaintenanceWindowExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
