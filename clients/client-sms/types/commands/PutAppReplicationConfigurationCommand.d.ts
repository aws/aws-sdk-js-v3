import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { PutAppReplicationConfigurationRequest, PutAppReplicationConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutAppReplicationConfigurationCommandInput = PutAppReplicationConfigurationRequest;
export declare type PutAppReplicationConfigurationCommandOutput = PutAppReplicationConfigurationResponse & __MetadataBearer;
export declare class PutAppReplicationConfigurationCommand extends $Command<PutAppReplicationConfigurationCommandInput, PutAppReplicationConfigurationCommandOutput, SMSClientResolvedConfig> {
    readonly input: PutAppReplicationConfigurationCommandInput;
    constructor(input: PutAppReplicationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutAppReplicationConfigurationCommandInput, PutAppReplicationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
