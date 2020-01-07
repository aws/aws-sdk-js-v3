import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ExecuteProvisionedProductServiceActionInput, ExecuteProvisionedProductServiceActionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ExecuteProvisionedProductServiceActionCommandInput = ExecuteProvisionedProductServiceActionInput;
export declare type ExecuteProvisionedProductServiceActionCommandOutput = ExecuteProvisionedProductServiceActionOutput & __MetadataBearer;
export declare class ExecuteProvisionedProductServiceActionCommand extends $Command<ExecuteProvisionedProductServiceActionCommandInput, ExecuteProvisionedProductServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ExecuteProvisionedProductServiceActionCommandInput;
    constructor(input: ExecuteProvisionedProductServiceActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExecuteProvisionedProductServiceActionCommandInput, ExecuteProvisionedProductServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
