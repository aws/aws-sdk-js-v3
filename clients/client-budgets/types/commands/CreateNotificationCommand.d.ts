import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { CreateNotificationRequest, CreateNotificationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNotificationCommandInput = CreateNotificationRequest;
export declare type CreateNotificationCommandOutput = CreateNotificationResponse & __MetadataBearer;
export declare class CreateNotificationCommand extends $Command<CreateNotificationCommandInput, CreateNotificationCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: CreateNotificationCommandInput;
    constructor(input: CreateNotificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNotificationCommandInput, CreateNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
