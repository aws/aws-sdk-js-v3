import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { GetHostnameSuggestionRequest, GetHostnameSuggestionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHostnameSuggestionCommandInput = GetHostnameSuggestionRequest;
export declare type GetHostnameSuggestionCommandOutput = GetHostnameSuggestionResult & __MetadataBearer;
export declare class GetHostnameSuggestionCommand extends $Command<GetHostnameSuggestionCommandInput, GetHostnameSuggestionCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: GetHostnameSuggestionCommandInput;
    constructor(input: GetHostnameSuggestionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHostnameSuggestionCommandInput, GetHostnameSuggestionCommandOutput>;
    private serialize;
    private deserialize;
}
