import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListDeviceEventsRequest, ListDeviceEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeviceEventsCommandInput = ListDeviceEventsRequest;
export declare type ListDeviceEventsCommandOutput = ListDeviceEventsResponse & __MetadataBearer;
export declare class ListDeviceEventsCommand extends $Command<ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ListDeviceEventsCommandInput;
    constructor(input: ListDeviceEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeviceEventsCommandInput, ListDeviceEventsCommandOutput>;
    private serialize;
    private deserialize;
}
