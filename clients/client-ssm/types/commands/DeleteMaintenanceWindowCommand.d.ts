import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteMaintenanceWindowRequest, DeleteMaintenanceWindowResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteMaintenanceWindowCommandInput = DeleteMaintenanceWindowRequest;
export declare type DeleteMaintenanceWindowCommandOutput = DeleteMaintenanceWindowResult & __MetadataBearer;
export declare class DeleteMaintenanceWindowCommand extends $Command<DeleteMaintenanceWindowCommandInput, DeleteMaintenanceWindowCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteMaintenanceWindowCommandInput;
    constructor(input: DeleteMaintenanceWindowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteMaintenanceWindowCommandInput, DeleteMaintenanceWindowCommandOutput>;
    private serialize;
    private deserialize;
}
