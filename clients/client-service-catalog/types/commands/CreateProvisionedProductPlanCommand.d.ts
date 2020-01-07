import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateProvisionedProductPlanInput, CreateProvisionedProductPlanOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProvisionedProductPlanCommandInput = CreateProvisionedProductPlanInput;
export declare type CreateProvisionedProductPlanCommandOutput = CreateProvisionedProductPlanOutput & __MetadataBearer;
export declare class CreateProvisionedProductPlanCommand extends $Command<CreateProvisionedProductPlanCommandInput, CreateProvisionedProductPlanCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateProvisionedProductPlanCommandInput;
    constructor(input: CreateProvisionedProductPlanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProvisionedProductPlanCommandInput, CreateProvisionedProductPlanCommandOutput>;
    private serialize;
    private deserialize;
}
