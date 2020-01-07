import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { UpdateProductInput, UpdateProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateProductCommandInput = UpdateProductInput;
export declare type UpdateProductCommandOutput = UpdateProductOutput & __MetadataBearer;
export declare class UpdateProductCommand extends $Command<UpdateProductCommandInput, UpdateProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: UpdateProductCommandInput;
    constructor(input: UpdateProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateProductCommandInput, UpdateProductCommandOutput>;
    private serialize;
    private deserialize;
}
