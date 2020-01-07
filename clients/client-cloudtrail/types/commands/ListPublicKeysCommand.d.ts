import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { ListPublicKeysRequest, ListPublicKeysResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPublicKeysCommandInput = ListPublicKeysRequest;
export declare type ListPublicKeysCommandOutput = ListPublicKeysResponse & __MetadataBearer;
export declare class ListPublicKeysCommand extends $Command<ListPublicKeysCommandInput, ListPublicKeysCommandOutput, CloudTrailClientResolvedConfig> {
    readonly input: ListPublicKeysCommandInput;
    constructor(input: ListPublicKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudTrailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPublicKeysCommandInput, ListPublicKeysCommandOutput>;
    private serialize;
    private deserialize;
}
