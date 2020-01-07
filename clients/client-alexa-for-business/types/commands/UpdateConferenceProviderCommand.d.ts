import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { UpdateConferenceProviderRequest, UpdateConferenceProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateConferenceProviderCommandInput = UpdateConferenceProviderRequest;
export declare type UpdateConferenceProviderCommandOutput = UpdateConferenceProviderResponse & __MetadataBearer;
export declare class UpdateConferenceProviderCommand extends $Command<UpdateConferenceProviderCommandInput, UpdateConferenceProviderCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: UpdateConferenceProviderCommandInput;
    constructor(input: UpdateConferenceProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateConferenceProviderCommandInput, UpdateConferenceProviderCommandOutput>;
    private serialize;
    private deserialize;
}
