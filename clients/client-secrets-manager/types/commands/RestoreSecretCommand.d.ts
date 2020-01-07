import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { RestoreSecretRequest, RestoreSecretResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreSecretCommandInput = RestoreSecretRequest;
export declare type RestoreSecretCommandOutput = RestoreSecretResponse & __MetadataBearer;
export declare class RestoreSecretCommand extends $Command<RestoreSecretCommandInput, RestoreSecretCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: RestoreSecretCommandInput;
    constructor(input: RestoreSecretCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreSecretCommandInput, RestoreSecretCommandOutput>;
    private serialize;
    private deserialize;
}
