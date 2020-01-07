import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { RotateSecretRequest, RotateSecretResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RotateSecretCommandInput = RotateSecretRequest;
export declare type RotateSecretCommandOutput = RotateSecretResponse & __MetadataBearer;
export declare class RotateSecretCommand extends $Command<RotateSecretCommandInput, RotateSecretCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: RotateSecretCommandInput;
    constructor(input: RotateSecretCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RotateSecretCommandInput, RotateSecretCommandOutput>;
    private serialize;
    private deserialize;
}
