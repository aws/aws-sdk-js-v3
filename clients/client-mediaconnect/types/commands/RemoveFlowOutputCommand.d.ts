import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RemoveFlowOutputRequest, RemoveFlowOutputResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveFlowOutputCommandInput = RemoveFlowOutputRequest;
export declare type RemoveFlowOutputCommandOutput = RemoveFlowOutputResponse & __MetadataBearer;
export declare class RemoveFlowOutputCommand extends $Command<RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: RemoveFlowOutputCommandInput;
    constructor(input: RemoveFlowOutputCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput>;
    private serialize;
    private deserialize;
}
