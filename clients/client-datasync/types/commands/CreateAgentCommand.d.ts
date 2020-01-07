import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { CreateAgentRequest, CreateAgentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAgentCommandInput = CreateAgentRequest;
export declare type CreateAgentCommandOutput = CreateAgentResponse & __MetadataBearer;
export declare class CreateAgentCommand extends $Command<CreateAgentCommandInput, CreateAgentCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: CreateAgentCommandInput;
    constructor(input: CreateAgentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAgentCommandInput, CreateAgentCommandOutput>;
    private serialize;
    private deserialize;
}
