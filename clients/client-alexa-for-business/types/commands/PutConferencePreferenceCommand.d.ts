import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutConferencePreferenceRequest, PutConferencePreferenceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutConferencePreferenceCommandInput = PutConferencePreferenceRequest;
export declare type PutConferencePreferenceCommandOutput = PutConferencePreferenceResponse & __MetadataBearer;
export declare class PutConferencePreferenceCommand extends $Command<PutConferencePreferenceCommandInput, PutConferencePreferenceCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: PutConferencePreferenceCommandInput;
    constructor(input: PutConferencePreferenceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutConferencePreferenceCommandInput, PutConferencePreferenceCommandOutput>;
    private serialize;
    private deserialize;
}
