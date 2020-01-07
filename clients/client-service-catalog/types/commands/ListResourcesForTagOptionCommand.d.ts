import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListResourcesForTagOptionInput, ListResourcesForTagOptionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResourcesForTagOptionCommandInput = ListResourcesForTagOptionInput;
export declare type ListResourcesForTagOptionCommandOutput = ListResourcesForTagOptionOutput & __MetadataBearer;
export declare class ListResourcesForTagOptionCommand extends $Command<ListResourcesForTagOptionCommandInput, ListResourcesForTagOptionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListResourcesForTagOptionCommandInput;
    constructor(input: ListResourcesForTagOptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResourcesForTagOptionCommandInput, ListResourcesForTagOptionCommandOutput>;
    private serialize;
    private deserialize;
}
