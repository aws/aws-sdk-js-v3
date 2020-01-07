import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { AddFlowOutputsRequest, AddFlowOutputsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddFlowOutputsCommandInput = AddFlowOutputsRequest;
export declare type AddFlowOutputsCommandOutput = AddFlowOutputsResponse & __MetadataBearer;
export declare class AddFlowOutputsCommand extends $Command<AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: AddFlowOutputsCommandInput;
    constructor(input: AddFlowOutputsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput>;
    private serialize;
    private deserialize;
}
