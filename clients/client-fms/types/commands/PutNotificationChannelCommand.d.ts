import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { PutNotificationChannelRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutNotificationChannelCommandInput = PutNotificationChannelRequest;
export declare type PutNotificationChannelCommandOutput = __MetadataBearer;
export declare class PutNotificationChannelCommand extends $Command<PutNotificationChannelCommandInput, PutNotificationChannelCommandOutput, FMSClientResolvedConfig> {
    readonly input: PutNotificationChannelCommandInput;
    constructor(input: PutNotificationChannelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutNotificationChannelCommandInput, PutNotificationChannelCommandOutput>;
    private serialize;
    private deserialize;
}
