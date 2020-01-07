import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { CreateReplicationJobRequest, CreateReplicationJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateReplicationJobCommandInput = CreateReplicationJobRequest;
export declare type CreateReplicationJobCommandOutput = CreateReplicationJobResponse & __MetadataBearer;
export declare class CreateReplicationJobCommand extends $Command<CreateReplicationJobCommandInput, CreateReplicationJobCommandOutput, SMSClientResolvedConfig> {
    readonly input: CreateReplicationJobCommandInput;
    constructor(input: CreateReplicationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateReplicationJobCommandInput, CreateReplicationJobCommandOutput>;
    private serialize;
    private deserialize;
}
