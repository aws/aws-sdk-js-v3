import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import { ListAttacksRequest, ListAttacksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAttacksCommandInput = ListAttacksRequest;
export declare type ListAttacksCommandOutput = ListAttacksResponse & __MetadataBearer;
export declare class ListAttacksCommand extends $Command<ListAttacksCommandInput, ListAttacksCommandOutput, ShieldClientResolvedConfig> {
    readonly input: ListAttacksCommandInput;
    constructor(input: ListAttacksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ShieldClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAttacksCommandInput, ListAttacksCommandOutput>;
    private serialize;
    private deserialize;
}
