import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterMaintenanceMessage, ModifyClusterMaintenanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClusterMaintenanceCommandInput = ModifyClusterMaintenanceMessage;
export declare type ModifyClusterMaintenanceCommandOutput = ModifyClusterMaintenanceResult & __MetadataBearer;
export declare class ModifyClusterMaintenanceCommand extends $Command<ModifyClusterMaintenanceCommandInput, ModifyClusterMaintenanceCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: ModifyClusterMaintenanceCommandInput;
    constructor(input: ModifyClusterMaintenanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClusterMaintenanceCommandInput, ModifyClusterMaintenanceCommandOutput>;
    private serialize;
    private deserialize;
}
