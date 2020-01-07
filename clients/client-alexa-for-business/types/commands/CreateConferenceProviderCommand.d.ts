import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { CreateConferenceProviderRequest, CreateConferenceProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateConferenceProviderCommandInput = CreateConferenceProviderRequest;
export declare type CreateConferenceProviderCommandOutput = CreateConferenceProviderResponse & __MetadataBearer;
export declare class CreateConferenceProviderCommand extends $Command<CreateConferenceProviderCommandInput, CreateConferenceProviderCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: CreateConferenceProviderCommandInput;
    constructor(input: CreateConferenceProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateConferenceProviderCommandInput, CreateConferenceProviderCommandOutput>;
    private serialize;
    private deserialize;
}
