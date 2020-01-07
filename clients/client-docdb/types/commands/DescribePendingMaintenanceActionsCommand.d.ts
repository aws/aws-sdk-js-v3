import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { DescribePendingMaintenanceActionsMessage, PendingMaintenanceActionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePendingMaintenanceActionsCommandInput = DescribePendingMaintenanceActionsMessage;
export declare type DescribePendingMaintenanceActionsCommandOutput = PendingMaintenanceActionsMessage & __MetadataBearer;
export declare class DescribePendingMaintenanceActionsCommand extends $Command<DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput, DocDBClientResolvedConfig> {
    readonly input: DescribePendingMaintenanceActionsCommandInput;
    constructor(input: DescribePendingMaintenanceActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DocDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput>;
    private serialize;
    private deserialize;
}
