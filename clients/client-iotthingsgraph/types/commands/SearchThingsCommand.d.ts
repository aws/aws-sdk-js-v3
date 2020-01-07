import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchThingsRequest, SearchThingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchThingsCommandInput = SearchThingsRequest;
export declare type SearchThingsCommandOutput = SearchThingsResponse & __MetadataBearer;
export declare class SearchThingsCommand extends $Command<SearchThingsCommandInput, SearchThingsCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchThingsCommandInput;
    constructor(input: SearchThingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchThingsCommandInput, SearchThingsCommandOutput>;
    private serialize;
    private deserialize;
}
