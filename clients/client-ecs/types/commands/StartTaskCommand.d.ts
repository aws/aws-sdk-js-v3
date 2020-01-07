import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { StartTaskRequest, StartTaskResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartTaskCommandInput = StartTaskRequest;
export declare type StartTaskCommandOutput = StartTaskResponse & __MetadataBearer;
export declare class StartTaskCommand extends $Command<StartTaskCommandInput, StartTaskCommandOutput, ECSClientResolvedConfig> {
    readonly input: StartTaskCommandInput;
    constructor(input: StartTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTaskCommandInput, StartTaskCommandOutput>;
    private serialize;
    private deserialize;
}
