import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { PutSecretValueRequest, PutSecretValueResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutSecretValueCommandInput = PutSecretValueRequest;
export declare type PutSecretValueCommandOutput = PutSecretValueResponse & __MetadataBearer;
export declare class PutSecretValueCommand extends $Command<PutSecretValueCommandInput, PutSecretValueCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: PutSecretValueCommandInput;
    constructor(input: PutSecretValueCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutSecretValueCommandInput, PutSecretValueCommandOutput>;
    private serialize;
    private deserialize;
}
