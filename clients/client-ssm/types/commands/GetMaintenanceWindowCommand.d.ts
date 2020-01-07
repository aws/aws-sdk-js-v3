import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetMaintenanceWindowRequest, GetMaintenanceWindowResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMaintenanceWindowCommandInput = GetMaintenanceWindowRequest;
export declare type GetMaintenanceWindowCommandOutput = GetMaintenanceWindowResult & __MetadataBearer;
export declare class GetMaintenanceWindowCommand extends $Command<GetMaintenanceWindowCommandInput, GetMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetMaintenanceWindowCommandInput;
    constructor(input: GetMaintenanceWindowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMaintenanceWindowCommandInput, GetMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
