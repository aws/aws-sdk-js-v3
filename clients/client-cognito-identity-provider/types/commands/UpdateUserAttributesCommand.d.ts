import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateUserAttributesRequest, UpdateUserAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUserAttributesCommandInput = UpdateUserAttributesRequest;
export declare type UpdateUserAttributesCommandOutput = UpdateUserAttributesResponse & __MetadataBearer;
export declare class UpdateUserAttributesCommand extends $Command<UpdateUserAttributesCommandInput, UpdateUserAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateUserAttributesCommandInput;
    constructor(input: UpdateUserAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUserAttributesCommandInput, UpdateUserAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
