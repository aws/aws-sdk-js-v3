import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { CreateBudgetRequest, CreateBudgetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateBudgetCommandInput = CreateBudgetRequest;
export declare type CreateBudgetCommandOutput = CreateBudgetResponse & __MetadataBearer;
export declare class CreateBudgetCommand extends $Command<CreateBudgetCommandInput, CreateBudgetCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: CreateBudgetCommandInput;
    constructor(input: CreateBudgetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateBudgetCommandInput, CreateBudgetCommandOutput>;
    private serialize;
    private deserialize;
}
