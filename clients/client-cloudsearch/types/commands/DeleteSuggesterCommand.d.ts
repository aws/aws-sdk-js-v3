import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteSuggesterRequest, DeleteSuggesterResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSuggesterCommandInput = DeleteSuggesterRequest;
export declare type DeleteSuggesterCommandOutput = DeleteSuggesterResponse & __MetadataBearer;
export declare class DeleteSuggesterCommand extends $Command<DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DeleteSuggesterCommandInput;
    constructor(input: DeleteSuggesterCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSuggesterCommandInput, DeleteSuggesterCommandOutput>;
    private serialize;
    private deserialize;
}
