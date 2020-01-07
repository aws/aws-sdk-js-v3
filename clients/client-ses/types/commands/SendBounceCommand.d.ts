import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SendBounceRequest, SendBounceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendBounceCommandInput = SendBounceRequest;
export declare type SendBounceCommandOutput = SendBounceResponse & __MetadataBearer;
export declare class SendBounceCommand extends $Command<SendBounceCommandInput, SendBounceCommandOutput, SESClientResolvedConfig> {
    readonly input: SendBounceCommandInput;
    constructor(input: SendBounceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendBounceCommandInput, SendBounceCommandOutput>;
    private serialize;
    private deserialize;
}
