import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateMaintenanceWindowTargetRequest, UpdateMaintenanceWindowTargetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMaintenanceWindowTargetCommandInput = UpdateMaintenanceWindowTargetRequest;
export declare type UpdateMaintenanceWindowTargetCommandOutput = UpdateMaintenanceWindowTargetResult & __MetadataBearer;
export declare class UpdateMaintenanceWindowTargetCommand extends $Command<UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateMaintenanceWindowTargetCommandInput;
    constructor(input: UpdateMaintenanceWindowTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput>;
    private serialize;
    private deserialize;
}
