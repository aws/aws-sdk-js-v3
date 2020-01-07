import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeSubscribersForNotificationRequest, DescribeSubscribersForNotificationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSubscribersForNotificationCommandInput = DescribeSubscribersForNotificationRequest;
export declare type DescribeSubscribersForNotificationCommandOutput = DescribeSubscribersForNotificationResponse & __MetadataBearer;
export declare class DescribeSubscribersForNotificationCommand extends $Command<DescribeSubscribersForNotificationCommandInput, DescribeSubscribersForNotificationCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: DescribeSubscribersForNotificationCommandInput;
    constructor(input: DescribeSubscribersForNotificationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSubscribersForNotificationCommandInput, DescribeSubscribersForNotificationCommandOutput>;
    private serialize;
    private deserialize;
}
