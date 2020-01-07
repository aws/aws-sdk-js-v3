import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { RegisterTargetWithMaintenanceWindowRequest, RegisterTargetWithMaintenanceWindowResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterTargetWithMaintenanceWindowCommandInput = RegisterTargetWithMaintenanceWindowRequest;
export declare type RegisterTargetWithMaintenanceWindowCommandOutput = RegisterTargetWithMaintenanceWindowResult & __MetadataBearer;
export declare class RegisterTargetWithMaintenanceWindowCommand extends $Command<RegisterTargetWithMaintenanceWindowCommandInput, RegisterTargetWithMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: RegisterTargetWithMaintenanceWindowCommandInput;
    constructor(input: RegisterTargetWithMaintenanceWindowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterTargetWithMaintenanceWindowCommandInput, RegisterTargetWithMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
