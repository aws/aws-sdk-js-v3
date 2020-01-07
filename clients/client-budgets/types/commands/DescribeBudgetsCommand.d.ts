import { BudgetsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BudgetsClient";
import { DescribeBudgetsRequest, DescribeBudgetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeBudgetsCommandInput = DescribeBudgetsRequest;
export declare type DescribeBudgetsCommandOutput = DescribeBudgetsResponse & __MetadataBearer;
export declare class DescribeBudgetsCommand extends $Command<DescribeBudgetsCommandInput, DescribeBudgetsCommandOutput, BudgetsClientResolvedConfig> {
    readonly input: DescribeBudgetsCommandInput;
    constructor(input: DescribeBudgetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: BudgetsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeBudgetsCommandInput, DescribeBudgetsCommandOutput>;
    private serialize;
    private deserialize;
}
