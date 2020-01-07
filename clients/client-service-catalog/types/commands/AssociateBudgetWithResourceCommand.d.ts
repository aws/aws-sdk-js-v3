import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { AssociateBudgetWithResourceInput, AssociateBudgetWithResourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateBudgetWithResourceCommandInput = AssociateBudgetWithResourceInput;
export declare type AssociateBudgetWithResourceCommandOutput = AssociateBudgetWithResourceOutput & __MetadataBearer;
export declare class AssociateBudgetWithResourceCommand extends $Command<AssociateBudgetWithResourceCommandInput, AssociateBudgetWithResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: AssociateBudgetWithResourceCommandInput;
    constructor(input: AssociateBudgetWithResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateBudgetWithResourceCommandInput, AssociateBudgetWithResourceCommandOutput>;
    private serialize;
    private deserialize;
}
