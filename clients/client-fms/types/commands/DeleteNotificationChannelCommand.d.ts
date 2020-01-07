import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { DeleteNotificationChannelRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNotificationChannelCommandInput = DeleteNotificationChannelRequest;
export declare type DeleteNotificationChannelCommandOutput = __MetadataBearer;
export declare class DeleteNotificationChannelCommand extends $Command<DeleteNotificationChannelCommandInput, DeleteNotificationChannelCommandOutput, FMSClientResolvedConfig> {
    readonly input: DeleteNotificationChannelCommandInput;
    constructor(input: DeleteNotificationChannelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNotificationChannelCommandInput, DeleteNotificationChannelCommandOutput>;
    private serialize;
    private deserialize;
}
