import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { CreateSecretRequest, CreateSecretResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSecretCommandInput = CreateSecretRequest;
export declare type CreateSecretCommandOutput = CreateSecretResponse & __MetadataBearer;
export declare class CreateSecretCommand extends $Command<CreateSecretCommandInput, CreateSecretCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: CreateSecretCommandInput;
    constructor(input: CreateSecretCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSecretCommandInput, CreateSecretCommandOutput>;
    private serialize;
    private deserialize;
}
