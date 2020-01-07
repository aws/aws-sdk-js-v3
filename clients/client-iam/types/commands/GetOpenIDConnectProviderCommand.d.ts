import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetOpenIDConnectProviderRequest, GetOpenIDConnectProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetOpenIDConnectProviderCommandInput = GetOpenIDConnectProviderRequest;
export declare type GetOpenIDConnectProviderCommandOutput = GetOpenIDConnectProviderResponse & __MetadataBearer;
export declare class GetOpenIDConnectProviderCommand extends $Command<GetOpenIDConnectProviderCommandInput, GetOpenIDConnectProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetOpenIDConnectProviderCommandInput;
    constructor(input: GetOpenIDConnectProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetOpenIDConnectProviderCommandInput, GetOpenIDConnectProviderCommandOutput>;
    private serialize;
    private deserialize;
}
