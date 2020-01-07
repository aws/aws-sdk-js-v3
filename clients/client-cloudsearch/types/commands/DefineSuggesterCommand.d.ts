import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DefineSuggesterRequest, DefineSuggesterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DefineSuggesterCommandInput = DefineSuggesterRequest;
export declare type DefineSuggesterCommandOutput = DefineSuggesterResponse & __MetadataBearer;
export declare class DefineSuggesterCommand extends $Command<DefineSuggesterCommandInput, DefineSuggesterCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DefineSuggesterCommandInput;
    constructor(input: DefineSuggesterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DefineSuggesterCommandInput, DefineSuggesterCommandOutput>;
    private serialize;
    private deserialize;
}
