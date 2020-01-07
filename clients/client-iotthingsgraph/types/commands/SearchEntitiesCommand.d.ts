import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchEntitiesRequest, SearchEntitiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchEntitiesCommandInput = SearchEntitiesRequest;
export declare type SearchEntitiesCommandOutput = SearchEntitiesResponse & __MetadataBearer;
export declare class SearchEntitiesCommand extends $Command<SearchEntitiesCommandInput, SearchEntitiesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchEntitiesCommandInput;
    constructor(input: SearchEntitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchEntitiesCommandInput, SearchEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}
