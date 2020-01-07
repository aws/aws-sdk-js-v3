import { DataSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataSyncClient";
import { DeleteAgentRequest, DeleteAgentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAgentCommandInput = DeleteAgentRequest;
export declare type DeleteAgentCommandOutput = DeleteAgentResponse & __MetadataBearer;
export declare class DeleteAgentCommand extends $Command<DeleteAgentCommandInput, DeleteAgentCommandOutput, DataSyncClientResolvedConfig> {
    readonly input: DeleteAgentCommandInput;
    constructor(input: DeleteAgentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DataSyncClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAgentCommandInput, DeleteAgentCommandOutput>;
    private serialize;
    private deserialize;
}
