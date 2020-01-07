import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DeleteProductInput, DeleteProductOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteProductCommandInput = DeleteProductInput;
export declare type DeleteProductCommandOutput = DeleteProductOutput & __MetadataBearer;
export declare class DeleteProductCommand extends $Command<DeleteProductCommandInput, DeleteProductCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DeleteProductCommandInput;
    constructor(input: DeleteProductCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteProductCommandInput, DeleteProductCommandOutput>;
    private serialize;
    private deserialize;
}
