import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { CreateCostCategoryDefinitionRequest, CreateCostCategoryDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCostCategoryDefinitionCommandInput = CreateCostCategoryDefinitionRequest;
export declare type CreateCostCategoryDefinitionCommandOutput = CreateCostCategoryDefinitionResponse & __MetadataBearer;
export declare class CreateCostCategoryDefinitionCommand extends $Command<CreateCostCategoryDefinitionCommandInput, CreateCostCategoryDefinitionCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: CreateCostCategoryDefinitionCommandInput;
    constructor(input: CreateCostCategoryDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCostCategoryDefinitionCommandInput, CreateCostCategoryDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
