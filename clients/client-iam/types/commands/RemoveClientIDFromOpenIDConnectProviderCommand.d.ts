import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveClientIDFromOpenIDConnectProviderRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveClientIDFromOpenIDConnectProviderCommandInput = RemoveClientIDFromOpenIDConnectProviderRequest;
export declare type RemoveClientIDFromOpenIDConnectProviderCommandOutput = __MetadataBearer;
export declare class RemoveClientIDFromOpenIDConnectProviderCommand extends $Command<RemoveClientIDFromOpenIDConnectProviderCommandInput, RemoveClientIDFromOpenIDConnectProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: RemoveClientIDFromOpenIDConnectProviderCommandInput;
    constructor(input: RemoveClientIDFromOpenIDConnectProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveClientIDFromOpenIDConnectProviderCommandInput, RemoveClientIDFromOpenIDConnectProviderCommandOutput>;
    private serialize;
    private deserialize;
}
