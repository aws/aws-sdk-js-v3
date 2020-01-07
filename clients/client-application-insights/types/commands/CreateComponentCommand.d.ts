import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { CreateComponentRequest, CreateComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateComponentCommandInput = CreateComponentRequest;
export declare type CreateComponentCommandOutput = CreateComponentResponse & __MetadataBearer;
export declare class CreateComponentCommand extends $Command<CreateComponentCommandInput, CreateComponentCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: CreateComponentCommandInput;
    constructor(input: CreateComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateComponentCommandInput, CreateComponentCommandOutput>;
    private serialize;
    private deserialize;
}
