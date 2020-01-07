import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { CreateApplicationRequest, CreateApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateApplicationCommandInput = CreateApplicationRequest;
export declare type CreateApplicationCommandOutput = CreateApplicationResponse & __MetadataBearer;
export declare class CreateApplicationCommand extends $Command<CreateApplicationCommandInput, CreateApplicationCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: CreateApplicationCommandInput;
    constructor(input: CreateApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateApplicationCommandInput, CreateApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
