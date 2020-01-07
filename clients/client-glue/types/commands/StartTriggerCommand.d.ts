import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartTriggerRequest, StartTriggerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartTriggerCommandInput = StartTriggerRequest;
export declare type StartTriggerCommandOutput = StartTriggerResponse & __MetadataBearer;
export declare class StartTriggerCommand extends $Command<StartTriggerCommandInput, StartTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartTriggerCommandInput;
    constructor(input: StartTriggerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartTriggerCommandInput, StartTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
