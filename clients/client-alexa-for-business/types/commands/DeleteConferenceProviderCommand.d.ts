import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteConferenceProviderRequest, DeleteConferenceProviderResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteConferenceProviderCommandInput = DeleteConferenceProviderRequest;
export declare type DeleteConferenceProviderCommandOutput = DeleteConferenceProviderResponse & __MetadataBearer;
export declare class DeleteConferenceProviderCommand extends $Command<DeleteConferenceProviderCommandInput, DeleteConferenceProviderCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: DeleteConferenceProviderCommandInput;
    constructor(input: DeleteConferenceProviderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteConferenceProviderCommandInput, DeleteConferenceProviderCommandOutput>;
    private serialize;
    private deserialize;
}
