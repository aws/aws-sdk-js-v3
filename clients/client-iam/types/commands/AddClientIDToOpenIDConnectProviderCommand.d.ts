import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddClientIDToOpenIDConnectProviderRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddClientIDToOpenIDConnectProviderCommandInput = AddClientIDToOpenIDConnectProviderRequest;
export declare type AddClientIDToOpenIDConnectProviderCommandOutput = __MetadataBearer;
export declare class AddClientIDToOpenIDConnectProviderCommand extends $Command<AddClientIDToOpenIDConnectProviderCommandInput, AddClientIDToOpenIDConnectProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: AddClientIDToOpenIDConnectProviderCommandInput;
    constructor(input: AddClientIDToOpenIDConnectProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddClientIDToOpenIDConnectProviderCommandInput, AddClientIDToOpenIDConnectProviderCommandOutput>;
    private serialize;
    private deserialize;
}
