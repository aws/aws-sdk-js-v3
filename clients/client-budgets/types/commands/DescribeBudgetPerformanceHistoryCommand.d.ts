import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeBudgetPerformanceHistoryRequest, DescribeBudgetPerformanceHistoryResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBudgetPerformanceHistoryCommandInput = DescribeBudgetPerformanceHistoryRequest;
export declare type DescribeBudgetPerformanceHistoryCommandOutput = DescribeBudgetPerformanceHistoryResponse & __MetadataBearer;
export declare class DescribeBudgetPerformanceHistoryCommand extends $Command<DescribeBudgetPerformanceHistoryCommandInput, DescribeBudgetPerformanceHistoryCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: DescribeBudgetPerformanceHistoryCommandInput;
    constructor(input: DescribeBudgetPerformanceHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBudgetPerformanceHistoryCommandInput, DescribeBudgetPerformanceHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
