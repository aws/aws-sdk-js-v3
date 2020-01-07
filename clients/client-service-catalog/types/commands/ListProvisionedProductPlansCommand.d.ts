import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListProvisionedProductPlansInput, ListProvisionedProductPlansOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProvisionedProductPlansCommandInput = ListProvisionedProductPlansInput;
export declare type ListProvisionedProductPlansCommandOutput = ListProvisionedProductPlansOutput & __MetadataBearer;
export declare class ListProvisionedProductPlansCommand extends $Command<ListProvisionedProductPlansCommandInput, ListProvisionedProductPlansCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListProvisionedProductPlansCommandInput;
    constructor(input: ListProvisionedProductPlansCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProvisionedProductPlansCommandInput, ListProvisionedProductPlansCommandOutput>;
    private serialize;
    private deserialize;
}
