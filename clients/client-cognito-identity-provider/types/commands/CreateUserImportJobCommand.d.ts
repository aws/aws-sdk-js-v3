import { CognitoIdentityProviderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CognitoIdentityProviderClient";
import { CreateUserImportJobRequest, CreateUserImportJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUserImportJobCommandInput = CreateUserImportJobRequest;
export declare type CreateUserImportJobCommandOutput = CreateUserImportJobResponse & __MetadataBearer;
export declare class CreateUserImportJobCommand extends $Command<CreateUserImportJobCommandInput, CreateUserImportJobCommandOutput, CognitoIdentityProviderClientResolvedConfig> {
    readonly input: CreateUserImportJobCommandInput;
    constructor(input: CreateUserImportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CognitoIdentityProviderClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUserImportJobCommandInput, CreateUserImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
