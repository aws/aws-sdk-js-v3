import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { UpdateSecretRequest, UpdateSecretResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSecretCommandInput = UpdateSecretRequest;
export declare type UpdateSecretCommandOutput = UpdateSecretResponse & __MetadataBearer;
export declare class UpdateSecretCommand extends $Command<UpdateSecretCommandInput, UpdateSecretCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: UpdateSecretCommandInput;
    constructor(input: UpdateSecretCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSecretCommandInput, UpdateSecretCommandOutput>;
    private serialize;
    private deserialize;
}
