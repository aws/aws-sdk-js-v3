import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { SubscribeInput, SubscribeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SubscribeCommandInput = SubscribeInput;
export declare type SubscribeCommandOutput = SubscribeResponse & __MetadataBearer;
export declare class SubscribeCommand extends $Command<SubscribeCommandInput, SubscribeCommandOutput, SNSClientResolvedConfig> {
    readonly input: SubscribeCommandInput;
    constructor(input: SubscribeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SubscribeCommandInput, SubscribeCommandOutput>;
    private serialize;
    private deserialize;
}
