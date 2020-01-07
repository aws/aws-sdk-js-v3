import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DeleteNotificationRequest, DeleteNotificationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteNotificationCommandInput = DeleteNotificationRequest;
export declare type DeleteNotificationCommandOutput = DeleteNotificationResponse & __MetadataBearer;
export declare class DeleteNotificationCommand extends $Command<DeleteNotificationCommandInput, DeleteNotificationCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: DeleteNotificationCommandInput;
    constructor(input: DeleteNotificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNotificationCommandInput, DeleteNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
