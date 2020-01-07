import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { UpdateComponentRequest, UpdateComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateComponentCommandInput = UpdateComponentRequest;
export declare type UpdateComponentCommandOutput = UpdateComponentResponse & __MetadataBearer;
export declare class UpdateComponentCommand extends $Command<UpdateComponentCommandInput, UpdateComponentCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: UpdateComponentCommandInput;
    constructor(input: UpdateComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateComponentCommandInput, UpdateComponentCommandOutput>;
    private serialize;
    private deserialize;
}
