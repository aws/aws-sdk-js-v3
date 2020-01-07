import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeNotificationsForBudgetRequest, DescribeNotificationsForBudgetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNotificationsForBudgetCommandInput = DescribeNotificationsForBudgetRequest;
export declare type DescribeNotificationsForBudgetCommandOutput = DescribeNotificationsForBudgetResponse & __MetadataBearer;
export declare class DescribeNotificationsForBudgetCommand extends $Command<DescribeNotificationsForBudgetCommandInput, DescribeNotificationsForBudgetCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: DescribeNotificationsForBudgetCommandInput;
    constructor(input: DescribeNotificationsForBudgetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNotificationsForBudgetCommandInput, DescribeNotificationsForBudgetCommandOutput>;
    private serialize;
    private deserialize;
}
