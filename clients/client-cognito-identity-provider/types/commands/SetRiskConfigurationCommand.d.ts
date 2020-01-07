import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SetRiskConfigurationRequest, SetRiskConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetRiskConfigurationCommandInput = SetRiskConfigurationRequest;
export declare type SetRiskConfigurationCommandOutput = SetRiskConfigurationResponse & __MetadataBearer;
export declare class SetRiskConfigurationCommand extends $Command<SetRiskConfigurationCommandInput, SetRiskConfigurationCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SetRiskConfigurationCommandInput;
    constructor(input: SetRiskConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetRiskConfigurationCommandInput, SetRiskConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
