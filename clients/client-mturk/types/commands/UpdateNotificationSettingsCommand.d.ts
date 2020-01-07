import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateNotificationSettingsRequest, UpdateNotificationSettingsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateNotificationSettingsCommandInput = UpdateNotificationSettingsRequest;
export declare type UpdateNotificationSettingsCommandOutput = UpdateNotificationSettingsResponse & __MetadataBearer;
export declare class UpdateNotificationSettingsCommand extends $Command<UpdateNotificationSettingsCommandInput, UpdateNotificationSettingsCommandOutput, MTurkClientResolvedConfig> {
    readonly input: UpdateNotificationSettingsCommandInput;
    constructor(input: UpdateNotificationSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNotificationSettingsCommandInput, UpdateNotificationSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
