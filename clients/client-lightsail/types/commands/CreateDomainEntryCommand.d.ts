import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateDomainEntryRequest, CreateDomainEntryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDomainEntryCommandInput = CreateDomainEntryRequest;
export declare type CreateDomainEntryCommandOutput = CreateDomainEntryResult & __MetadataBearer;
export declare class CreateDomainEntryCommand extends $Command<CreateDomainEntryCommandInput, CreateDomainEntryCommandOutput, LightsailClientResolvedConfig> {
    readonly input: CreateDomainEntryCommandInput;
    constructor(input: CreateDomainEntryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDomainEntryCommandInput, CreateDomainEntryCommandOutput>;
    private serialize;
    private deserialize;
}
