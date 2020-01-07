import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { DeleteComponentRequest, DeleteComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteComponentCommandInput = DeleteComponentRequest;
export declare type DeleteComponentCommandOutput = DeleteComponentResponse & __MetadataBearer;
export declare class DeleteComponentCommand extends $Command<DeleteComponentCommandInput, DeleteComponentCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: DeleteComponentCommandInput;
    constructor(input: DeleteComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteComponentCommandInput, DeleteComponentCommandOutput>;
    private serialize;
    private deserialize;
}
