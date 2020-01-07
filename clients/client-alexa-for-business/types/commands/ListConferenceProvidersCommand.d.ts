import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { ListConferenceProvidersRequest, ListConferenceProvidersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListConferenceProvidersCommandInput = ListConferenceProvidersRequest;
export declare type ListConferenceProvidersCommandOutput = ListConferenceProvidersResponse & __MetadataBearer;
export declare class ListConferenceProvidersCommand extends $Command<ListConferenceProvidersCommandInput, ListConferenceProvidersCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: ListConferenceProvidersCommandInput;
    constructor(input: ListConferenceProvidersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListConferenceProvidersCommandInput, ListConferenceProvidersCommandOutput>;
    private serialize;
    private deserialize;
}
