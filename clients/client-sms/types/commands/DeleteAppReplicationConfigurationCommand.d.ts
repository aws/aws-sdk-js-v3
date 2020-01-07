import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { DeleteAppReplicationConfigurationRequest, DeleteAppReplicationConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAppReplicationConfigurationCommandInput = DeleteAppReplicationConfigurationRequest;
export declare type DeleteAppReplicationConfigurationCommandOutput = DeleteAppReplicationConfigurationResponse & __MetadataBearer;
export declare class DeleteAppReplicationConfigurationCommand extends $Command<DeleteAppReplicationConfigurationCommandInput, DeleteAppReplicationConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: DeleteAppReplicationConfigurationCommandInput;
    constructor(input: DeleteAppReplicationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAppReplicationConfigurationCommandInput, DeleteAppReplicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
