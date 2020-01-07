import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProvisionedProductPlanInput, DescribeProvisionedProductPlanOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProvisionedProductPlanCommandInput = DescribeProvisionedProductPlanInput;
export declare type DescribeProvisionedProductPlanCommandOutput = DescribeProvisionedProductPlanOutput & __MetadataBearer;
export declare class DescribeProvisionedProductPlanCommand extends $Command<DescribeProvisionedProductPlanCommandInput, DescribeProvisionedProductPlanCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProvisionedProductPlanCommandInput;
    constructor(input: DescribeProvisionedProductPlanCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProvisionedProductPlanCommandInput, DescribeProvisionedProductPlanCommandOutput>;
    private serialize;
    private deserialize;
}
