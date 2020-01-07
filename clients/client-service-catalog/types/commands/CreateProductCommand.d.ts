import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateProductInput, CreateProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateProductCommandInput = CreateProductInput;
export declare type CreateProductCommandOutput = CreateProductOutput & __MetadataBearer;
export declare class CreateProductCommand extends $Command<CreateProductCommandInput, CreateProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateProductCommandInput;
    constructor(input: CreateProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateProductCommandInput, CreateProductCommandOutput>;
    private serialize;
    private deserialize;
}
