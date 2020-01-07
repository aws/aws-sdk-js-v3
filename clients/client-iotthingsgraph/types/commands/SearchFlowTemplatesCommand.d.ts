import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchFlowTemplatesRequest, SearchFlowTemplatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchFlowTemplatesCommandInput = SearchFlowTemplatesRequest;
export declare type SearchFlowTemplatesCommandOutput = SearchFlowTemplatesResponse & __MetadataBearer;
export declare class SearchFlowTemplatesCommand extends $Command<SearchFlowTemplatesCommandInput, SearchFlowTemplatesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchFlowTemplatesCommandInput;
    constructor(input: SearchFlowTemplatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchFlowTemplatesCommandInput, SearchFlowTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
