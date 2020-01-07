import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateDomainRequest, CreateDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDomainCommandInput = CreateDomainRequest;
export declare type CreateDomainCommandOutput = CreateDomainResponse & __MetadataBearer;
export declare class CreateDomainCommand extends $Command<CreateDomainCommandInput, CreateDomainCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateDomainCommandInput;
    constructor(input: CreateDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDomainCommandInput, CreateDomainCommandOutput>;
    private serialize;
    private deserialize;
}
