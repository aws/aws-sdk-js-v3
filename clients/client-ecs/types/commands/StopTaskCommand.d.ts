import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { StopTaskRequest, StopTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopTaskCommandInput = StopTaskRequest;
export declare type StopTaskCommandOutput = StopTaskResponse & __MetadataBearer;
export declare class StopTaskCommand extends $Command<StopTaskCommandInput, StopTaskCommandOutput, ECSClientResolvedConfig> {
    readonly input: StopTaskCommandInput;
    constructor(input: StopTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTaskCommandInput, StopTaskCommandOutput>;
    private serialize;
    private deserialize;
}
