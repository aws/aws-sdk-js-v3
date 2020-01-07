import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListStackInstancesForProvisionedProductInput, ListStackInstancesForProvisionedProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListStackInstancesForProvisionedProductCommandInput = ListStackInstancesForProvisionedProductInput;
export declare type ListStackInstancesForProvisionedProductCommandOutput = ListStackInstancesForProvisionedProductOutput & __MetadataBearer;
export declare class ListStackInstancesForProvisionedProductCommand extends $Command<ListStackInstancesForProvisionedProductCommandInput, ListStackInstancesForProvisionedProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListStackInstancesForProvisionedProductCommandInput;
    constructor(input: ListStackInstancesForProvisionedProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListStackInstancesForProvisionedProductCommandInput, ListStackInstancesForProvisionedProductCommandOutput>;
    private serialize;
    private deserialize;
}
