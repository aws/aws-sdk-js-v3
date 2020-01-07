import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeregisterTaskFromMaintenanceWindowRequest, DeregisterTaskFromMaintenanceWindowResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterTaskFromMaintenanceWindowCommandInput = DeregisterTaskFromMaintenanceWindowRequest;
export declare type DeregisterTaskFromMaintenanceWindowCommandOutput = DeregisterTaskFromMaintenanceWindowResult & __MetadataBearer;
export declare class DeregisterTaskFromMaintenanceWindowCommand extends $Command<DeregisterTaskFromMaintenanceWindowCommandInput, DeregisterTaskFromMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeregisterTaskFromMaintenanceWindowCommandInput;
    constructor(input: DeregisterTaskFromMaintenanceWindowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterTaskFromMaintenanceWindowCommandInput, DeregisterTaskFromMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
