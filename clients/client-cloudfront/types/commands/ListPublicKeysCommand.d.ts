import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { ListPublicKeysRequest, ListPublicKeysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPublicKeysCommandInput = ListPublicKeysRequest;
export declare type ListPublicKeysCommandOutput = ListPublicKeysResult & __MetadataBearer;
export declare class ListPublicKeysCommand extends $Command<ListPublicKeysCommandInput, ListPublicKeysCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: ListPublicKeysCommandInput;
    constructor(input: ListPublicKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPublicKeysCommandInput, ListPublicKeysCommandOutput>;
    private serialize;
    private deserialize;
}
