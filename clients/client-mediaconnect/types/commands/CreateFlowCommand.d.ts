import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { CreateFlowRequest, CreateFlowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFlowCommandInput = CreateFlowRequest;
export declare type CreateFlowCommandOutput = CreateFlowResponse & __MetadataBearer;
export declare class CreateFlowCommand extends $Command<CreateFlowCommandInput, CreateFlowCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: CreateFlowCommandInput;
    constructor(input: CreateFlowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFlowCommandInput, CreateFlowCommandOutput>;
    private serialize;
    private deserialize;
}
