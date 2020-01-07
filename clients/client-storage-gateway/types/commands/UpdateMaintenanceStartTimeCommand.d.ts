import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateMaintenanceStartTimeInput, UpdateMaintenanceStartTimeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateMaintenanceStartTimeCommandInput = UpdateMaintenanceStartTimeInput;
export declare type UpdateMaintenanceStartTimeCommandOutput = UpdateMaintenanceStartTimeOutput & __MetadataBearer;
export declare class UpdateMaintenanceStartTimeCommand extends $Command<UpdateMaintenanceStartTimeCommandInput, UpdateMaintenanceStartTimeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateMaintenanceStartTimeCommandInput;
    constructor(input: UpdateMaintenanceStartTimeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateMaintenanceStartTimeCommandInput, UpdateMaintenanceStartTimeCommandOutput>;
    private serialize;
    private deserialize;
}
