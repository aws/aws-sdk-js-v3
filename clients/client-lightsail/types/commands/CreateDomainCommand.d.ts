import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDomainRequest, CreateDomainResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDomainCommandInput = CreateDomainRequest;
export declare type CreateDomainCommandOutput = CreateDomainResult & __MetadataBearer;
export declare class CreateDomainCommand extends $Command<CreateDomainCommandInput, CreateDomainCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateDomainCommandInput;
    constructor(input: CreateDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDomainCommandInput, CreateDomainCommandOutput>;
    private serialize;
    private deserialize;
}
