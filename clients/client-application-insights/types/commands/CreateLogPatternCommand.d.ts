import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { CreateLogPatternRequest, CreateLogPatternResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLogPatternCommandInput = CreateLogPatternRequest;
export declare type CreateLogPatternCommandOutput = CreateLogPatternResponse & __MetadataBearer;
export declare class CreateLogPatternCommand extends $Command<CreateLogPatternCommandInput, CreateLogPatternCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: CreateLogPatternCommandInput;
    constructor(input: CreateLogPatternCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLogPatternCommandInput, CreateLogPatternCommandOutput>;
    private serialize;
    private deserialize;
}
