import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetTriggerRequest, GetTriggerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetTriggerCommandInput = GetTriggerRequest;
export declare type GetTriggerCommandOutput = GetTriggerResponse & __MetadataBearer;
export declare class GetTriggerCommand extends $Command<GetTriggerCommandInput, GetTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: GetTriggerCommandInput;
    constructor(input: GetTriggerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetTriggerCommandInput, GetTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
