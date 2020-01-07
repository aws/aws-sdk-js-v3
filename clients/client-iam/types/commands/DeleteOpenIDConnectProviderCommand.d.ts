import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteOpenIDConnectProviderRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteOpenIDConnectProviderCommandInput = DeleteOpenIDConnectProviderRequest;
export declare type DeleteOpenIDConnectProviderCommandOutput = __MetadataBearer;
export declare class DeleteOpenIDConnectProviderCommand extends $Command<DeleteOpenIDConnectProviderCommandInput, DeleteOpenIDConnectProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteOpenIDConnectProviderCommandInput;
    constructor(input: DeleteOpenIDConnectProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOpenIDConnectProviderCommandInput, DeleteOpenIDConnectProviderCommandOutput>;
    private serialize;
    private deserialize;
}
