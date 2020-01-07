import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StopTriggerRequest, StopTriggerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopTriggerCommandInput = StopTriggerRequest;
export declare type StopTriggerCommandOutput = StopTriggerResponse & __MetadataBearer;
export declare class StopTriggerCommand extends $Command<StopTriggerCommandInput, StopTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: StopTriggerCommandInput;
    constructor(input: StopTriggerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTriggerCommandInput, StopTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
