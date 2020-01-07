import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ApplyPendingMaintenanceActionMessage, ApplyPendingMaintenanceActionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ApplyPendingMaintenanceActionCommandInput = ApplyPendingMaintenanceActionMessage;
export declare type ApplyPendingMaintenanceActionCommandOutput = ApplyPendingMaintenanceActionResult & __MetadataBearer;
export declare class ApplyPendingMaintenanceActionCommand extends $Command<ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput, RDSClientResolvedConfig> {
    readonly input: ApplyPendingMaintenanceActionCommandInput;
    constructor(input: ApplyPendingMaintenanceActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput>;
    private serialize;
    private deserialize;
}
