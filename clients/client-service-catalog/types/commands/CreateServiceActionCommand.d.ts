import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateServiceActionInput, CreateServiceActionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateServiceActionCommandInput = CreateServiceActionInput;
export declare type CreateServiceActionCommandOutput = CreateServiceActionOutput & __MetadataBearer;
export declare class CreateServiceActionCommand extends $Command<CreateServiceActionCommandInput, CreateServiceActionCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateServiceActionCommandInput;
    constructor(input: CreateServiceActionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateServiceActionCommandInput, CreateServiceActionCommandOutput>;
    private serialize;
    private deserialize;
}
