import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateMaintenanceWindowRequest, CreateMaintenanceWindowResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateMaintenanceWindowCommandInput = CreateMaintenanceWindowRequest;
export declare type CreateMaintenanceWindowCommandOutput = CreateMaintenanceWindowResult & __MetadataBearer;
export declare class CreateMaintenanceWindowCommand extends $Command<CreateMaintenanceWindowCommandInput, CreateMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateMaintenanceWindowCommandInput;
    constructor(input: CreateMaintenanceWindowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMaintenanceWindowCommandInput, CreateMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
