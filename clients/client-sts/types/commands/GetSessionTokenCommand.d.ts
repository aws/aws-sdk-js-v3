import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { GetSessionTokenRequest, GetSessionTokenResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSessionTokenCommandInput = GetSessionTokenRequest;
export declare type GetSessionTokenCommandOutput = GetSessionTokenResponse & __MetadataBearer;
export declare class GetSessionTokenCommand extends $Command<GetSessionTokenCommandInput, GetSessionTokenCommandOutput, STSClientResolvedConfig> {
    readonly input: GetSessionTokenCommandInput;
    constructor(input: GetSessionTokenCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: STSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSessionTokenCommandInput, GetSessionTokenCommandOutput>;
    private serialize;
    private deserialize;
}
