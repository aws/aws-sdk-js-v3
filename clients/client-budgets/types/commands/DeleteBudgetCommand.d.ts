import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DeleteBudgetRequest, DeleteBudgetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBudgetCommandInput = DeleteBudgetRequest;
export declare type DeleteBudgetCommandOutput = DeleteBudgetResponse & __MetadataBearer;
export declare class DeleteBudgetCommand extends $Command<DeleteBudgetCommandInput, DeleteBudgetCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: DeleteBudgetCommandInput;
    constructor(input: DeleteBudgetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBudgetCommandInput, DeleteBudgetCommandOutput>;
    private serialize;
    private deserialize;
}
