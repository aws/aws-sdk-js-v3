import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { ListEntitlementsRequest, ListEntitlementsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEntitlementsCommandInput = ListEntitlementsRequest;
export declare type ListEntitlementsCommandOutput = ListEntitlementsResponse & __MetadataBearer;
export declare class ListEntitlementsCommand extends $Command<ListEntitlementsCommandInput, ListEntitlementsCommandOutput, MediaConnectClientResolvedConfig> {
    readonly input: ListEntitlementsCommandInput;
    constructor(input: ListEntitlementsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MediaConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEntitlementsCommandInput, ListEntitlementsCommandOutput>;
    private serialize;
    private deserialize;
}
