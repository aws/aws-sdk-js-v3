import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { GetSecretValueRequest, GetSecretValueResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetSecretValueCommandInput = GetSecretValueRequest;
export declare type GetSecretValueCommandOutput = GetSecretValueResponse & __MetadataBearer;
export declare class GetSecretValueCommand extends $Command<GetSecretValueCommandInput, GetSecretValueCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: GetSecretValueCommandInput;
    constructor(input: GetSecretValueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSecretValueCommandInput, GetSecretValueCommandOutput>;
    private serialize;
    private deserialize;
}
