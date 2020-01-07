import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { UpdateBudgetRequest, UpdateBudgetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateBudgetCommandInput = UpdateBudgetRequest;
export declare type UpdateBudgetCommandOutput = UpdateBudgetResponse & __MetadataBearer;
export declare class UpdateBudgetCommand extends $Command<UpdateBudgetCommandInput, UpdateBudgetCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: UpdateBudgetCommandInput;
    constructor(input: UpdateBudgetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateBudgetCommandInput, UpdateBudgetCommandOutput>;
    private serialize;
    private deserialize;
}
