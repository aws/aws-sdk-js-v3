import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { CreateConstraintInput, CreateConstraintOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConstraintCommandInput = CreateConstraintInput;
export declare type CreateConstraintCommandOutput = CreateConstraintOutput & __MetadataBearer;
export declare class CreateConstraintCommand extends $Command<CreateConstraintCommandInput, CreateConstraintCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: CreateConstraintCommandInput;
    constructor(input: CreateConstraintCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConstraintCommandInput, CreateConstraintCommandOutput>;
    private serialize;
    private deserialize;
}
