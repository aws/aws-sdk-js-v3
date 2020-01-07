import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateProvisionedProductPropertiesInput, UpdateProvisionedProductPropertiesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateProvisionedProductPropertiesCommandInput = UpdateProvisionedProductPropertiesInput;
export declare type UpdateProvisionedProductPropertiesCommandOutput = UpdateProvisionedProductPropertiesOutput & __MetadataBearer;
export declare class UpdateProvisionedProductPropertiesCommand extends $Command<UpdateProvisionedProductPropertiesCommandInput, UpdateProvisionedProductPropertiesCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateProvisionedProductPropertiesCommandInput;
    constructor(input: UpdateProvisionedProductPropertiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProvisionedProductPropertiesCommandInput, UpdateProvisionedProductPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
