import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { GetAppReplicationConfigurationRequest, GetAppReplicationConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAppReplicationConfigurationCommandInput = GetAppReplicationConfigurationRequest;
export declare type GetAppReplicationConfigurationCommandOutput = GetAppReplicationConfigurationResponse & __MetadataBearer;
export declare class GetAppReplicationConfigurationCommand extends $Command<GetAppReplicationConfigurationCommandInput, GetAppReplicationConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: GetAppReplicationConfigurationCommandInput;
    constructor(input: GetAppReplicationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAppReplicationConfigurationCommandInput, GetAppReplicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
