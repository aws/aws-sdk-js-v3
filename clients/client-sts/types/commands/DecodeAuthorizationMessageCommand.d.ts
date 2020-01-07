import { STSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../STSClient";
import { DecodeAuthorizationMessageRequest, DecodeAuthorizationMessageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DecodeAuthorizationMessageCommandInput = DecodeAuthorizationMessageRequest;
export declare type DecodeAuthorizationMessageCommandOutput = DecodeAuthorizationMessageResponse & __MetadataBearer;
export declare class DecodeAuthorizationMessageCommand extends $Command<DecodeAuthorizationMessageCommandInput, DecodeAuthorizationMessageCommandOutput, STSClientResolvedConfig> {
    readonly input: DecodeAuthorizationMessageCommandInput;
    constructor(input: DecodeAuthorizationMessageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: STSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DecodeAuthorizationMessageCommandInput, DecodeAuthorizationMessageCommandOutput>;
    private serialize;
    private deserialize;
}
