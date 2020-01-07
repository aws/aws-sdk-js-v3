import { ServiceInputTypes, ServiceOutputTypes, TranslateClientResolvedConfig } from "../TranslateClient";
import { ListTextTranslationJobsRequest, ListTextTranslationJobsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTextTranslationJobsCommandInput = ListTextTranslationJobsRequest;
export declare type ListTextTranslationJobsCommandOutput = ListTextTranslationJobsResponse & __MetadataBearer;
export declare class ListTextTranslationJobsCommand extends $Command<ListTextTranslationJobsCommandInput, ListTextTranslationJobsCommandOutput, TranslateClientResolvedConfig> {
    readonly input: ListTextTranslationJobsCommandInput;
    constructor(input: ListTextTranslationJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TranslateClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTextTranslationJobsCommandInput, ListTextTranslationJobsCommandOutput>;
    private serialize;
    private deserialize;
}
