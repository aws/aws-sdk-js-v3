import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { UpdateAgentRequest, UpdateAgentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAgentCommandInput = UpdateAgentRequest;
export declare type UpdateAgentCommandOutput = UpdateAgentResponse & __MetadataBearer;
export declare class UpdateAgentCommand extends $Command<UpdateAgentCommandInput, UpdateAgentCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: UpdateAgentCommandInput;
    constructor(input: UpdateAgentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAgentCommandInput, UpdateAgentCommandOutput>;
    private serialize;
    private deserialize;
}
