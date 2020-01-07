import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateTagOptionInput, CreateTagOptionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTagOptionCommandInput = CreateTagOptionInput;
export declare type CreateTagOptionCommandOutput = CreateTagOptionOutput & __MetadataBearer;
export declare class CreateTagOptionCommand extends $Command<CreateTagOptionCommandInput, CreateTagOptionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateTagOptionCommandInput;
    constructor(input: CreateTagOptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTagOptionCommandInput, CreateTagOptionCommandOutput>;
    private serialize;
    private deserialize;
}
