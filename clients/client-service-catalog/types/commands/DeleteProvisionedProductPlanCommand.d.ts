import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteProvisionedProductPlanInput, DeleteProvisionedProductPlanOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteProvisionedProductPlanCommandInput = DeleteProvisionedProductPlanInput;
export declare type DeleteProvisionedProductPlanCommandOutput = DeleteProvisionedProductPlanOutput & __MetadataBearer;
export declare class DeleteProvisionedProductPlanCommand extends $Command<DeleteProvisionedProductPlanCommandInput, DeleteProvisionedProductPlanCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteProvisionedProductPlanCommandInput;
    constructor(input: DeleteProvisionedProductPlanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProvisionedProductPlanCommandInput, DeleteProvisionedProductPlanCommandOutput>;
    private serialize;
    private deserialize;
}
