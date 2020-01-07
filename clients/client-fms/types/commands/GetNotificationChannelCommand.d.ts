import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { GetNotificationChannelRequest, GetNotificationChannelResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetNotificationChannelCommandInput = GetNotificationChannelRequest;
export declare type GetNotificationChannelCommandOutput = GetNotificationChannelResponse & __MetadataBearer;
export declare class GetNotificationChannelCommand extends $Command<GetNotificationChannelCommandInput, GetNotificationChannelCommandOutput, FMSClientResolvedConfig> {
    readonly input: GetNotificationChannelCommandInput;
    constructor(input: GetNotificationChannelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetNotificationChannelCommandInput, GetNotificationChannelCommandOutput>;
    private serialize;
    private deserialize;
}
