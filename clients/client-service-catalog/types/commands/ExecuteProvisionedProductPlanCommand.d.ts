import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ExecuteProvisionedProductPlanInput, ExecuteProvisionedProductPlanOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExecuteProvisionedProductPlanCommandInput = ExecuteProvisionedProductPlanInput;
export declare type ExecuteProvisionedProductPlanCommandOutput = ExecuteProvisionedProductPlanOutput & __MetadataBearer;
export declare class ExecuteProvisionedProductPlanCommand extends $Command<ExecuteProvisionedProductPlanCommandInput, ExecuteProvisionedProductPlanCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ExecuteProvisionedProductPlanCommandInput;
    constructor(input: ExecuteProvisionedProductPlanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteProvisionedProductPlanCommandInput, ExecuteProvisionedProductPlanCommandOutput>;
    private serialize;
    private deserialize;
}
