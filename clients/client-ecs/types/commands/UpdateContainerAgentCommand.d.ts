import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { UpdateContainerAgentRequest, UpdateContainerAgentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateContainerAgentCommandInput = UpdateContainerAgentRequest;
export declare type UpdateContainerAgentCommandOutput = UpdateContainerAgentResponse & __MetadataBearer;
export declare class UpdateContainerAgentCommand extends $Command<UpdateContainerAgentCommandInput, UpdateContainerAgentCommandOutput, ECSClientResolvedConfig> {
    readonly input: UpdateContainerAgentCommandInput;
    constructor(input: UpdateContainerAgentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateContainerAgentCommandInput, UpdateContainerAgentCommandOutput>;
    private serialize;
    private deserialize;
}
