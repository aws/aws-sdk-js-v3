import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetMaintenanceWindowTaskRequest, GetMaintenanceWindowTaskResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMaintenanceWindowTaskCommandInput = GetMaintenanceWindowTaskRequest;
export declare type GetMaintenanceWindowTaskCommandOutput = GetMaintenanceWindowTaskResult & __MetadataBearer;
export declare class GetMaintenanceWindowTaskCommand extends $Command<GetMaintenanceWindowTaskCommandInput, GetMaintenanceWindowTaskCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetMaintenanceWindowTaskCommandInput;
    constructor(input: GetMaintenanceWindowTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMaintenanceWindowTaskCommandInput, GetMaintenanceWindowTaskCommandOutput>;
    private serialize;
    private deserialize;
}
