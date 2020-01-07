import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DescribePendingMaintenanceActionsMessage, PendingMaintenanceActionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePendingMaintenanceActionsCommandInput = DescribePendingMaintenanceActionsMessage;
export declare type DescribePendingMaintenanceActionsCommandOutput = PendingMaintenanceActionsMessage & __MetadataBearer;
export declare class DescribePendingMaintenanceActionsCommand extends $Command<DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: DescribePendingMaintenanceActionsCommandInput;
    constructor(input: DescribePendingMaintenanceActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePendingMaintenanceActionsCommandInput, DescribePendingMaintenanceActionsCommandOutput>;
    private serialize;
    private deserialize;
}
