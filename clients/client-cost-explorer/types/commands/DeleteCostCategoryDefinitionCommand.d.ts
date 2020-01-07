import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DeleteCostCategoryDefinitionRequest, DeleteCostCategoryDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCostCategoryDefinitionCommandInput = DeleteCostCategoryDefinitionRequest;
export declare type DeleteCostCategoryDefinitionCommandOutput = DeleteCostCategoryDefinitionResponse & __MetadataBearer;
export declare class DeleteCostCategoryDefinitionCommand extends $Command<DeleteCostCategoryDefinitionCommandInput, DeleteCostCategoryDefinitionCommandOutput, CostExplorerClientResolvedConfig> {
    readonly input: DeleteCostCategoryDefinitionCommandInput;
    constructor(input: DeleteCostCategoryDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostExplorerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCostCategoryDefinitionCommandInput, DeleteCostCategoryDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
