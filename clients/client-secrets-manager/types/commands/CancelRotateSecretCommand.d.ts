import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { CancelRotateSecretRequest, CancelRotateSecretResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelRotateSecretCommandInput = CancelRotateSecretRequest;
export declare type CancelRotateSecretCommandOutput = CancelRotateSecretResponse & __MetadataBearer;
export declare class CancelRotateSecretCommand extends $Command<CancelRotateSecretCommandInput, CancelRotateSecretCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: CancelRotateSecretCommandInput;
    constructor(input: CancelRotateSecretCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelRotateSecretCommandInput, CancelRotateSecretCommandOutput>;
    private serialize;
    private deserialize;
}
