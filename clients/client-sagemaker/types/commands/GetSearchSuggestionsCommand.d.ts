import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { GetSearchSuggestionsRequest, GetSearchSuggestionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSearchSuggestionsCommandInput = GetSearchSuggestionsRequest;
export declare type GetSearchSuggestionsCommandOutput = GetSearchSuggestionsResponse & __MetadataBearer;
export declare class GetSearchSuggestionsCommand extends $Command<GetSearchSuggestionsCommandInput, GetSearchSuggestionsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: GetSearchSuggestionsCommandInput;
    constructor(input: GetSearchSuggestionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSearchSuggestionsCommandInput, GetSearchSuggestionsCommandOutput>;
    private serialize;
    private deserialize;
}
