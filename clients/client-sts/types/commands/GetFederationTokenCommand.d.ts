import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { GetFederationTokenRequest, GetFederationTokenResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFederationTokenCommandInput = GetFederationTokenRequest;
export declare type GetFederationTokenCommandOutput = GetFederationTokenResponse & __MetadataBearer;
export declare class GetFederationTokenCommand extends $Command<GetFederationTokenCommandInput, GetFederationTokenCommandOutput, STSClientResolvedConfig> {
    readonly input: GetFederationTokenCommandInput;
    constructor(input: GetFederationTokenCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: STSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFederationTokenCommandInput, GetFederationTokenCommandOutput>;
    private serialize;
    private deserialize;
}
