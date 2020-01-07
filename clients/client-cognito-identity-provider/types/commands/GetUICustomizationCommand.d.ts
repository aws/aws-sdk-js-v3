import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { GetUICustomizationRequest, GetUICustomizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUICustomizationCommandInput = GetUICustomizationRequest;
export declare type GetUICustomizationCommandOutput = GetUICustomizationResponse & __MetadataBearer;
export declare class GetUICustomizationCommand extends $Command<GetUICustomizationCommandInput, GetUICustomizationCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: GetUICustomizationCommandInput;
    constructor(input: GetUICustomizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUICustomizationCommandInput, GetUICustomizationCommandOutput>;
    private serialize;
    private deserialize;
}
