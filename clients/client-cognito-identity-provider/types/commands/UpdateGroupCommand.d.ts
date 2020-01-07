import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { UpdateGroupRequest, UpdateGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGroupCommandInput = UpdateGroupRequest;
export declare type UpdateGroupCommandOutput = UpdateGroupResponse & __MetadataBearer;
export declare class UpdateGroupCommand extends $Command<UpdateGroupCommandInput, UpdateGroupCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: UpdateGroupCommandInput;
    constructor(input: UpdateGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGroupCommandInput, UpdateGroupCommandOutput>;
    private serialize;
    private deserialize;
}
