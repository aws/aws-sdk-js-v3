import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { GetAuthorizationTokenRequest, GetAuthorizationTokenResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAuthorizationTokenCommandInput = GetAuthorizationTokenRequest;
export declare type GetAuthorizationTokenCommandOutput = GetAuthorizationTokenResponse & __MetadataBearer;
export declare class GetAuthorizationTokenCommand extends $Command<GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput, ECRClientResolvedConfig> {
    readonly input: GetAuthorizationTokenCommandInput;
    constructor(input: GetAuthorizationTokenCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAuthorizationTokenCommandInput, GetAuthorizationTokenCommandOutput>;
    private serialize;
    private deserialize;
}
