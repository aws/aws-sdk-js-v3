import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateMaintenanceWindowRequest, UpdateMaintenanceWindowResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMaintenanceWindowCommandInput = UpdateMaintenanceWindowRequest;
export declare type UpdateMaintenanceWindowCommandOutput = UpdateMaintenanceWindowResult & __MetadataBearer;
export declare class UpdateMaintenanceWindowCommand extends $Command<UpdateMaintenanceWindowCommandInput, UpdateMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateMaintenanceWindowCommandInput;
    constructor(input: UpdateMaintenanceWindowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMaintenanceWindowCommandInput, UpdateMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
