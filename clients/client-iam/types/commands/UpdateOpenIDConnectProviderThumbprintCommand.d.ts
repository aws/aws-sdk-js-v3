import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateOpenIDConnectProviderThumbprintRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateOpenIDConnectProviderThumbprintCommandInput = UpdateOpenIDConnectProviderThumbprintRequest;
export declare type UpdateOpenIDConnectProviderThumbprintCommandOutput = __MetadataBearer;
export declare class UpdateOpenIDConnectProviderThumbprintCommand extends $Command<UpdateOpenIDConnectProviderThumbprintCommandInput, UpdateOpenIDConnectProviderThumbprintCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateOpenIDConnectProviderThumbprintCommandInput;
    constructor(input: UpdateOpenIDConnectProviderThumbprintCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateOpenIDConnectProviderThumbprintCommandInput, UpdateOpenIDConnectProviderThumbprintCommandOutput>;
    private serialize;
    private deserialize;
}
