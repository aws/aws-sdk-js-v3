import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { StartFlowRequest, StartFlowResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartFlowCommandInput = StartFlowRequest;
export declare type StartFlowCommandOutput = StartFlowResponse & __MetadataBearer;
export declare class StartFlowCommand extends $Command<StartFlowCommandInput, StartFlowCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: StartFlowCommandInput;
    constructor(input: StartFlowCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartFlowCommandInput, StartFlowCommandOutput>;
    private serialize;
    private deserialize;
}
