import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { SendTestEventNotificationRequest, SendTestEventNotificationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendTestEventNotificationCommandInput = SendTestEventNotificationRequest;
export declare type SendTestEventNotificationCommandOutput = SendTestEventNotificationResponse & __MetadataBearer;
export declare class SendTestEventNotificationCommand extends $Command<SendTestEventNotificationCommandInput, SendTestEventNotificationCommandOutput, MTurkClientResolvedConfig> {
    readonly input: SendTestEventNotificationCommandInput;
    constructor(input: SendTestEventNotificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendTestEventNotificationCommandInput, SendTestEventNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
