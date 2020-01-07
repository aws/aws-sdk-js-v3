import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { DeleteUserAttributesRequest, DeleteUserAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUserAttributesCommandInput = DeleteUserAttributesRequest;
export declare type DeleteUserAttributesCommandOutput = DeleteUserAttributesResponse & __MetadataBearer;
export declare class DeleteUserAttributesCommand extends $Command<DeleteUserAttributesCommandInput, DeleteUserAttributesCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: DeleteUserAttributesCommandInput;
    constructor(input: DeleteUserAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUserAttributesCommandInput, DeleteUserAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
