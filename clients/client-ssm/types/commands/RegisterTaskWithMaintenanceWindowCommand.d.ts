import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { RegisterTaskWithMaintenanceWindowRequest, RegisterTaskWithMaintenanceWindowResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterTaskWithMaintenanceWindowCommandInput = RegisterTaskWithMaintenanceWindowRequest;
export declare type RegisterTaskWithMaintenanceWindowCommandOutput = RegisterTaskWithMaintenanceWindowResult & __MetadataBearer;
export declare class RegisterTaskWithMaintenanceWindowCommand extends $Command<RegisterTaskWithMaintenanceWindowCommandInput, RegisterTaskWithMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: RegisterTaskWithMaintenanceWindowCommandInput;
    constructor(input: RegisterTaskWithMaintenanceWindowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTaskWithMaintenanceWindowCommandInput, RegisterTaskWithMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
