import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AdminDeleteUserAttributesRequest, AdminDeleteUserAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AdminDeleteUserAttributesCommandInput = AdminDeleteUserAttributesRequest;
export declare type AdminDeleteUserAttributesCommandOutput = AdminDeleteUserAttributesResponse & __MetadataBearer;
export declare class AdminDeleteUserAttributesCommand extends $Command<AdminDeleteUserAttributesCommandInput, AdminDeleteUserAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AdminDeleteUserAttributesCommandInput;
    constructor(input: AdminDeleteUserAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AdminDeleteUserAttributesCommandInput, AdminDeleteUserAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
