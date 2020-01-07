import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchFlowExecutionsRequest, SearchFlowExecutionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchFlowExecutionsCommandInput = SearchFlowExecutionsRequest;
export declare type SearchFlowExecutionsCommandOutput = SearchFlowExecutionsResponse & __MetadataBearer;
export declare class SearchFlowExecutionsCommand extends $Command<SearchFlowExecutionsCommandInput, SearchFlowExecutionsCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchFlowExecutionsCommandInput;
    constructor(input: SearchFlowExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchFlowExecutionsCommandInput, SearchFlowExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
