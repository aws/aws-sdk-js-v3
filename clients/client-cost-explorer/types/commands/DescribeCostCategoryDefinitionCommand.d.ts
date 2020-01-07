import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DescribeCostCategoryDefinitionRequest, DescribeCostCategoryDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCostCategoryDefinitionCommandInput = DescribeCostCategoryDefinitionRequest;
export declare type DescribeCostCategoryDefinitionCommandOutput = DescribeCostCategoryDefinitionResponse & __MetadataBearer;
export declare class DescribeCostCategoryDefinitionCommand extends $Command<DescribeCostCategoryDefinitionCommandInput, DescribeCostCategoryDefinitionCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: DescribeCostCategoryDefinitionCommandInput;
    constructor(input: DescribeCostCategoryDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCostCategoryDefinitionCommandInput, DescribeCostCategoryDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
