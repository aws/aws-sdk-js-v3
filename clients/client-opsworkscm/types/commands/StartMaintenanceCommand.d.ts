import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { StartMaintenanceRequest, StartMaintenanceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartMaintenanceCommandInput = StartMaintenanceRequest;
export declare type StartMaintenanceCommandOutput = StartMaintenanceResponse & __MetadataBearer;
export declare class StartMaintenanceCommand extends $Command<StartMaintenanceCommandInput, StartMaintenanceCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: StartMaintenanceCommandInput;
    constructor(input: StartMaintenanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMaintenanceCommandInput, StartMaintenanceCommandOutput>;
    private serialize;
    private deserialize;
}
