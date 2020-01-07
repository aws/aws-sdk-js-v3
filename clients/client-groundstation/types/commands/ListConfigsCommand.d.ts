import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListConfigsRequest, ListConfigsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListConfigsCommandInput = ListConfigsRequest;
export declare type ListConfigsCommandOutput = ListConfigsResponse & __MetadataBearer;
export declare class ListConfigsCommand extends $Command<ListConfigsCommandInput, ListConfigsCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListConfigsCommandInput;
    constructor(input: ListConfigsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConfigsCommandInput, ListConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
