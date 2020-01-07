import { DatabaseMigrationServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DatabaseMigrationServiceClient";
import { DescribePendingMaintenanceActionsMessage, DescribePendingMaintenanceActionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePendingMaintenanceActionsCommandInput = DescribePendingMaintenanceActionsMessage;
export declare type DescribePendingMaintenanceActionsCommandOutput = DescribePendingMaintenanceActionsResponse & __MetadataBearer;
export declare class DescribePendingMaintenanceActionsCommand extends $Command<DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput, DatabaseMigrationServiceClientResolvedConfig> {
    readonly input: DescribePendingMaintenanceActionsCommandInput;
    constructor(input: DescribePendingMaintenanceActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DatabaseMigrationServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput>;
    private serialize;
    private deserialize;
}
