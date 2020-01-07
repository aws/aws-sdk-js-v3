import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetSAMLProviderRequest, GetSAMLProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSAMLProviderCommandInput = GetSAMLProviderRequest;
export declare type GetSAMLProviderCommandOutput = GetSAMLProviderResponse & __MetadataBearer;
export declare class GetSAMLProviderCommand extends $Command<GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput, IAMClientResolvedConfig> {
    readonly input: GetSAMLProviderCommandInput;
    constructor(input: GetSAMLProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput>;
    private serialize;
    private deserialize;
}
