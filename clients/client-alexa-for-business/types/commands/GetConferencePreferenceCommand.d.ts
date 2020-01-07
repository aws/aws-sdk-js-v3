import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetConferencePreferenceRequest, GetConferencePreferenceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConferencePreferenceCommandInput = GetConferencePreferenceRequest;
export declare type GetConferencePreferenceCommandOutput = GetConferencePreferenceResponse & __MetadataBearer;
export declare class GetConferencePreferenceCommand extends $Command<GetConferencePreferenceCommandInput, GetConferencePreferenceCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetConferencePreferenceCommandInput;
    constructor(input: GetConferencePreferenceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConferencePreferenceCommandInput, GetConferencePreferenceCommandOutput>;
    private serialize;
    private deserialize;
}
