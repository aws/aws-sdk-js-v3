import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListKeysRequest, ListKeysResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListKeysCommandInput = ListKeysRequest;
export declare type ListKeysCommandOutput = ListKeysResponse & __MetadataBearer;
export declare class ListKeysCommand extends $Command<ListKeysCommandInput, ListKeysCommandOutput, KMSClientResolvedConfig> {
    readonly input: ListKeysCommandInput;
    constructor(input: ListKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListKeysCommandInput, ListKeysCommandOutput>;
    private serialize;
    private deserialize;
}
