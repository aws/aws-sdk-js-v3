import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { AddCustomAttributesRequest, AddCustomAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddCustomAttributesCommandInput = AddCustomAttributesRequest;
export declare type AddCustomAttributesCommandOutput = AddCustomAttributesResponse & __MetadataBearer;
export declare class AddCustomAttributesCommand extends $Command<AddCustomAttributesCommandInput, AddCustomAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: AddCustomAttributesCommandInput;
    constructor(input: AddCustomAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddCustomAttributesCommandInput, AddCustomAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
