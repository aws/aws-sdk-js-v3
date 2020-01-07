import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisassociateBudgetFromResourceInput, DisassociateBudgetFromResourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateBudgetFromResourceCommandInput = DisassociateBudgetFromResourceInput;
export declare type DisassociateBudgetFromResourceCommandOutput = DisassociateBudgetFromResourceOutput & __MetadataBearer;
export declare class DisassociateBudgetFromResourceCommand extends $Command<DisassociateBudgetFromResourceCommandInput, DisassociateBudgetFromResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisassociateBudgetFromResourceCommandInput;
    constructor(input: DisassociateBudgetFromResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateBudgetFromResourceCommandInput, DisassociateBudgetFromResourceCommandOutput>;
    private serialize;
    private deserialize;
}
