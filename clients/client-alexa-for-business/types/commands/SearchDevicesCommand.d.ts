import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { SearchDevicesRequest, SearchDevicesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SearchDevicesCommandInput = SearchDevicesRequest;
export declare type SearchDevicesCommandOutput = SearchDevicesResponse & __MetadataBearer;
export declare class SearchDevicesCommand extends $Command<SearchDevicesCommandInput, SearchDevicesCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: SearchDevicesCommandInput;
    constructor(input: SearchDevicesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SearchDevicesCommandInput, SearchDevicesCommandOutput>;
    private serialize;
    private deserialize;
}
