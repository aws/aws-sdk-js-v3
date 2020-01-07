import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { ListCostCategoryDefinitionsRequest, ListCostCategoryDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCostCategoryDefinitionsCommandInput = ListCostCategoryDefinitionsRequest;
export declare type ListCostCategoryDefinitionsCommandOutput = ListCostCategoryDefinitionsResponse & __MetadataBearer;
export declare class ListCostCategoryDefinitionsCommand extends $Command<ListCostCategoryDefinitionsCommandInput, ListCostCategoryDefinitionsCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: ListCostCategoryDefinitionsCommandInput;
    constructor(input: ListCostCategoryDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCostCategoryDefinitionsCommandInput, ListCostCategoryDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
