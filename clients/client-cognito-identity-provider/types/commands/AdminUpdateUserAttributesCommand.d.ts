import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminUpdateUserAttributesRequest, AdminUpdateUserAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminUpdateUserAttributesCommandInput = AdminUpdateUserAttributesRequest;
export declare type AdminUpdateUserAttributesCommandOutput = AdminUpdateUserAttributesResponse & __MetadataBearer;
export declare class AdminUpdateUserAttributesCommand extends $Command<AdminUpdateUserAttributesCommandInput, AdminUpdateUserAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminUpdateUserAttributesCommandInput;
    constructor(input: AdminUpdateUserAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminUpdateUserAttributesCommandInput, AdminUpdateUserAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
