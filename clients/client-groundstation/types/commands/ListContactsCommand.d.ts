import { GroundStationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GroundStationClient";
import { ListContactsRequest, ListContactsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListContactsCommandInput = ListContactsRequest;
export declare type ListContactsCommandOutput = ListContactsResponse & __MetadataBearer;
export declare class ListContactsCommand extends $Command<ListContactsCommandInput, ListContactsCommandOutput, GroundStationClientResolvedConfig> {
    readonly input: ListContactsCommandInput;
    constructor(input: ListContactsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GroundStationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListContactsCommandInput, ListContactsCommandOutput>;
    private serialize;
    private deserialize;
}
