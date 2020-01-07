import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DescribeProvisionedProductInput, DescribeProvisionedProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeProvisionedProductCommandInput = DescribeProvisionedProductInput;
export declare type DescribeProvisionedProductCommandOutput = DescribeProvisionedProductOutput & __MetadataBearer;
export declare class DescribeProvisionedProductCommand extends $Command<DescribeProvisionedProductCommandInput, DescribeProvisionedProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DescribeProvisionedProductCommandInput;
    constructor(input: DescribeProvisionedProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeProvisionedProductCommandInput, DescribeProvisionedProductCommandOutput>;
    private serialize;
    private deserialize;
}
