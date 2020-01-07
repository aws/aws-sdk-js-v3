import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchSystemTemplatesRequest, SearchSystemTemplatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchSystemTemplatesCommandInput = SearchSystemTemplatesRequest;
export declare type SearchSystemTemplatesCommandOutput = SearchSystemTemplatesResponse & __MetadataBearer;
export declare class SearchSystemTemplatesCommand extends $Command<SearchSystemTemplatesCommandInput, SearchSystemTemplatesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchSystemTemplatesCommandInput;
    constructor(input: SearchSystemTemplatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchSystemTemplatesCommandInput, SearchSystemTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
