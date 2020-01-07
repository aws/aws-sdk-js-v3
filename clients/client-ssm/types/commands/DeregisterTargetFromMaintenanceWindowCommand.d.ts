import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeregisterTargetFromMaintenanceWindowRequest, DeregisterTargetFromMaintenanceWindowResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterTargetFromMaintenanceWindowCommandInput = DeregisterTargetFromMaintenanceWindowRequest;
export declare type DeregisterTargetFromMaintenanceWindowCommandOutput = DeregisterTargetFromMaintenanceWindowResult & __MetadataBearer;
export declare class DeregisterTargetFromMaintenanceWindowCommand extends $Command<DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeregisterTargetFromMaintenanceWindowCommandInput;
    constructor(input: DeregisterTargetFromMaintenanceWindowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
