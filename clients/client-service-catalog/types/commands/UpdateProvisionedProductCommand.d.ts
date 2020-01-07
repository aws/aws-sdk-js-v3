import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateProvisionedProductInput, UpdateProvisionedProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateProvisionedProductCommandInput = UpdateProvisionedProductInput;
export declare type UpdateProvisionedProductCommandOutput = UpdateProvisionedProductOutput & __MetadataBearer;
export declare class UpdateProvisionedProductCommand extends $Command<UpdateProvisionedProductCommandInput, UpdateProvisionedProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateProvisionedProductCommandInput;
    constructor(input: UpdateProvisionedProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProvisionedProductCommandInput, UpdateProvisionedProductCommandOutput>;
    private serialize;
    private deserialize;
}
