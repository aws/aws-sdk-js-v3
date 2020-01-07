import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListAccessKeysRequest, ListAccessKeysResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAccessKeysCommandInput = ListAccessKeysRequest;
export declare type ListAccessKeysCommandOutput = ListAccessKeysResponse & __MetadataBearer;
export declare class ListAccessKeysCommand extends $Command<ListAccessKeysCommandInput, ListAccessKeysCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListAccessKeysCommandInput;
    constructor(input: ListAccessKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccessKeysCommandInput, ListAccessKeysCommandOutput>;
    private serialize;
    private deserialize;
}
