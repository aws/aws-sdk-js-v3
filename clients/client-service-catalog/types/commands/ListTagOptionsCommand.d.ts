import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListTagOptionsInput, ListTagOptionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTagOptionsCommandInput = ListTagOptionsInput;
export declare type ListTagOptionsCommandOutput = ListTagOptionsOutput & __MetadataBearer;
export declare class ListTagOptionsCommand extends $Command<ListTagOptionsCommandInput, ListTagOptionsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListTagOptionsCommandInput;
    constructor(input: ListTagOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagOptionsCommandInput, ListTagOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
