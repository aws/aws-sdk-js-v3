import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { TerminateProvisionedProductInput, TerminateProvisionedProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateProvisionedProductCommandInput = TerminateProvisionedProductInput;
export declare type TerminateProvisionedProductCommandOutput = TerminateProvisionedProductOutput & __MetadataBearer;
export declare class TerminateProvisionedProductCommand extends $Command<TerminateProvisionedProductCommandInput, TerminateProvisionedProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: TerminateProvisionedProductCommandInput;
    constructor(input: TerminateProvisionedProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateProvisionedProductCommandInput, TerminateProvisionedProductCommandOutput>;
    private serialize;
    private deserialize;
}
