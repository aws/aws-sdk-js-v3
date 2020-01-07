import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { CreateTriggerRequest, CreateTriggerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTriggerCommandInput = CreateTriggerRequest;
export declare type CreateTriggerCommandOutput = CreateTriggerResponse & __MetadataBearer;
export declare class CreateTriggerCommand extends $Command<CreateTriggerCommandInput, CreateTriggerCommandOutput, GlueClientResolvedConfig> {
    readonly input: CreateTriggerCommandInput;
    constructor(input: CreateTriggerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTriggerCommandInput, CreateTriggerCommandOutput>;
    private serialize;
    private deserialize;
}
