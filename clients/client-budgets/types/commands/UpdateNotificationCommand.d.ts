import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { UpdateNotificationRequest, UpdateNotificationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateNotificationCommandInput = UpdateNotificationRequest;
export declare type UpdateNotificationCommandOutput = UpdateNotificationResponse & __MetadataBearer;
export declare class UpdateNotificationCommand extends $Command<UpdateNotificationCommandInput, UpdateNotificationCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: UpdateNotificationCommandInput;
    constructor(input: UpdateNotificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNotificationCommandInput, UpdateNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
