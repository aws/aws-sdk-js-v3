import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateMaintenanceWindowTaskRequest, UpdateMaintenanceWindowTaskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMaintenanceWindowTaskCommandInput = UpdateMaintenanceWindowTaskRequest;
export declare type UpdateMaintenanceWindowTaskCommandOutput = UpdateMaintenanceWindowTaskResult & __MetadataBearer;
export declare class UpdateMaintenanceWindowTaskCommand extends $Command<UpdateMaintenanceWindowTaskCommandInput, UpdateMaintenanceWindowTaskCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateMaintenanceWindowTaskCommandInput;
    constructor(input: UpdateMaintenanceWindowTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMaintenanceWindowTaskCommandInput, UpdateMaintenanceWindowTaskCommandOutput>;
    private serialize;
    private deserialize;
}
