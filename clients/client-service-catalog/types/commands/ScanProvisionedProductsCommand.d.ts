import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ScanProvisionedProductsInput, ScanProvisionedProductsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ScanProvisionedProductsCommandInput = ScanProvisionedProductsInput;
export declare type ScanProvisionedProductsCommandOutput = ScanProvisionedProductsOutput & __MetadataBearer;
export declare class ScanProvisionedProductsCommand extends $Command<ScanProvisionedProductsCommandInput, ScanProvisionedProductsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ScanProvisionedProductsCommandInput;
    constructor(input: ScanProvisionedProductsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ScanProvisionedProductsCommandInput, ScanProvisionedProductsCommandOutput>;
    private serialize;
    private deserialize;
}
