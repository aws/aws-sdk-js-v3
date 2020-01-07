import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListSAMLProvidersRequest, ListSAMLProvidersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSAMLProvidersCommandInput = ListSAMLProvidersRequest;
export declare type ListSAMLProvidersCommandOutput = ListSAMLProvidersResponse & __MetadataBearer;
export declare class ListSAMLProvidersCommand extends $Command<ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListSAMLProvidersCommandInput;
    constructor(input: ListSAMLProvidersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
