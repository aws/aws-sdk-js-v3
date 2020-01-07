import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListOpenIDConnectProvidersRequest, ListOpenIDConnectProvidersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListOpenIDConnectProvidersCommandInput = ListOpenIDConnectProvidersRequest;
export declare type ListOpenIDConnectProvidersCommandOutput = ListOpenIDConnectProvidersResponse & __MetadataBearer;
export declare class ListOpenIDConnectProvidersCommand extends $Command<ListOpenIDConnectProvidersCommandInput, ListOpenIDConnectProvidersCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListOpenIDConnectProvidersCommandInput;
    constructor(input: ListOpenIDConnectProvidersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOpenIDConnectProvidersCommandInput, ListOpenIDConnectProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
