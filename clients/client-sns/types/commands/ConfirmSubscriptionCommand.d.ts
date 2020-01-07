import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { ConfirmSubscriptionInput, ConfirmSubscriptionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ConfirmSubscriptionCommandInput = ConfirmSubscriptionInput;
export declare type ConfirmSubscriptionCommandOutput = ConfirmSubscriptionResponse & __MetadataBearer;
export declare class ConfirmSubscriptionCommand extends $Command<ConfirmSubscriptionCommandInput, ConfirmSubscriptionCommandOutput, SNSClientResolvedConfig> {
    readonly input: ConfirmSubscriptionCommandInput;
    constructor(input: ConfirmSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ConfirmSubscriptionCommandInput, ConfirmSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
