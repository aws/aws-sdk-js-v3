import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { UpdateCostCategoryDefinitionRequest, UpdateCostCategoryDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCostCategoryDefinitionCommandInput = UpdateCostCategoryDefinitionRequest;
export declare type UpdateCostCategoryDefinitionCommandOutput = UpdateCostCategoryDefinitionResponse & __MetadataBearer;
export declare class UpdateCostCategoryDefinitionCommand extends $Command<UpdateCostCategoryDefinitionCommandInput, UpdateCostCategoryDefinitionCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: UpdateCostCategoryDefinitionCommandInput;
    constructor(input: UpdateCostCategoryDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCostCategoryDefinitionCommandInput, UpdateCostCategoryDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
