import { IoTThingsGraphClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTThingsGraphClient";
import { SearchSystemInstancesRequest, SearchSystemInstancesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchSystemInstancesCommandInput = SearchSystemInstancesRequest;
export declare type SearchSystemInstancesCommandOutput = SearchSystemInstancesResponse & __MetadataBearer;
export declare class SearchSystemInstancesCommand extends $Command<SearchSystemInstancesCommandInput, SearchSystemInstancesCommandOutput, IoTThingsGraphClientResolvedConfig> {
    readonly input: SearchSystemInstancesCommandInput;
    constructor(input: SearchSystemInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IoTThingsGraphClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchSystemInstancesCommandInput, SearchSystemInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
