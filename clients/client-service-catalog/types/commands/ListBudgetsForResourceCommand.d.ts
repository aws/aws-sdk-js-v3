import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListBudgetsForResourceInput, ListBudgetsForResourceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBudgetsForResourceCommandInput = ListBudgetsForResourceInput;
export declare type ListBudgetsForResourceCommandOutput = ListBudgetsForResourceOutput & __MetadataBearer;
export declare class ListBudgetsForResourceCommand extends $Command<ListBudgetsForResourceCommandInput, ListBudgetsForResourceCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListBudgetsForResourceCommandInput;
    constructor(input: ListBudgetsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBudgetsForResourceCommandInput, ListBudgetsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
