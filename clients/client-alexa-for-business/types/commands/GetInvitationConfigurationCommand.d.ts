import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { GetInvitationConfigurationRequest, GetInvitationConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInvitationConfigurationCommandInput = GetInvitationConfigurationRequest;
export declare type GetInvitationConfigurationCommandOutput = GetInvitationConfigurationResponse & __MetadataBearer;
export declare class GetInvitationConfigurationCommand extends $Command<GetInvitationConfigurationCommandInput, GetInvitationConfigurationCommandOutput, AlexaForBusinessClientResolvedConfig> {
    readonly input: GetInvitationConfigurationCommandInput;
    constructor(input: GetInvitationConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AlexaForBusinessClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInvitationConfigurationCommandInput, GetInvitationConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
