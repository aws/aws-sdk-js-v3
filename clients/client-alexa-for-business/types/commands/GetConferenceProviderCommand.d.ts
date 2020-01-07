import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetConferenceProviderRequest, GetConferenceProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConferenceProviderCommandInput = GetConferenceProviderRequest;
export declare type GetConferenceProviderCommandOutput = GetConferenceProviderResponse & __MetadataBearer;
export declare class GetConferenceProviderCommand extends $Command<GetConferenceProviderCommandInput, GetConferenceProviderCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetConferenceProviderCommandInput;
    constructor(input: GetConferenceProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConferenceProviderCommandInput, GetConferenceProviderCommandOutput>;
    private serialize;
    private deserialize;
}
