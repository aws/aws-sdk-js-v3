import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { PutInvitationConfigurationRequest, PutInvitationConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutInvitationConfigurationCommandInput = PutInvitationConfigurationRequest;
export declare type PutInvitationConfigurationCommandOutput = PutInvitationConfigurationResponse & __MetadataBearer;
export declare class PutInvitationConfigurationCommand extends $Command<PutInvitationConfigurationCommandInput, PutInvitationConfigurationCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: PutInvitationConfigurationCommandInput;
    constructor(input: PutInvitationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutInvitationConfigurationCommandInput, PutInvitationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
