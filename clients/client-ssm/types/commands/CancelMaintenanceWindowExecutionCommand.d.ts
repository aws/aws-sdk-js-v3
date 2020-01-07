import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CancelMaintenanceWindowExecutionRequest, CancelMaintenanceWindowExecutionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelMaintenanceWindowExecutionCommandInput = CancelMaintenanceWindowExecutionRequest;
export declare type CancelMaintenanceWindowExecutionCommandOutput = CancelMaintenanceWindowExecutionResult & __MetadataBearer;
export declare class CancelMaintenanceWindowExecutionCommand extends $Command<CancelMaintenanceWindowExecutionCommandInput, CancelMaintenanceWindowExecutionCommandOutput, SSMClientResolvedConfig> {
    readonly input: CancelMaintenanceWindowExecutionCommandInput;
    constructor(input: CancelMaintenanceWindowExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelMaintenanceWindowExecutionCommandInput, CancelMaintenanceWindowExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
