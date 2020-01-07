import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { StopFlowRequest, StopFlowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopFlowCommandInput = StopFlowRequest;
export declare type StopFlowCommandOutput = StopFlowResponse & __MetadataBearer;
export declare class StopFlowCommand extends $Command<StopFlowCommandInput, StopFlowCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: StopFlowCommandInput;
    constructor(input: StopFlowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopFlowCommandInput, StopFlowCommandOutput>;
    private serialize;
    private deserialize;
}
