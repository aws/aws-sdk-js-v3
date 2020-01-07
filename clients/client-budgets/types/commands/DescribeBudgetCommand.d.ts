import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeBudgetRequest, DescribeBudgetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBudgetCommandInput = DescribeBudgetRequest;
export declare type DescribeBudgetCommandOutput = DescribeBudgetResponse & __MetadataBearer;
export declare class DescribeBudgetCommand extends $Command<DescribeBudgetCommandInput, DescribeBudgetCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: DescribeBudgetCommandInput;
    constructor(input: DescribeBudgetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBudgetCommandInput, DescribeBudgetCommandOutput>;
    private serialize;
    private deserialize;
}
