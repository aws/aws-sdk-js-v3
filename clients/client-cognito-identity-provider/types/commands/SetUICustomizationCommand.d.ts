import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { SetUICustomizationRequest, SetUICustomizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetUICustomizationCommandInput = SetUICustomizationRequest;
export declare type SetUICustomizationCommandOutput = SetUICustomizationResponse & __MetadataBearer;
export declare class SetUICustomizationCommand extends $Command<SetUICustomizationCommandInput, SetUICustomizationCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: SetUICustomizationCommandInput;
    constructor(input: SetUICustomizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetUICustomizationCommandInput, SetUICustomizationCommandOutput>;
    private serialize;
    private deserialize;
}
