import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ProvisionProductInput, ProvisionProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ProvisionProductCommandInput = ProvisionProductInput;
export declare type ProvisionProductCommandOutput = ProvisionProductOutput & __MetadataBearer;
export declare class ProvisionProductCommand extends $Command<ProvisionProductCommandInput, ProvisionProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ProvisionProductCommandInput;
    constructor(input: ProvisionProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ProvisionProductCommandInput, ProvisionProductCommandOutput>;
    private serialize;
    private deserialize;
}
