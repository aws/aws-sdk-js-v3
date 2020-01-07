import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { DeleteSecretRequest, DeleteSecretResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSecretCommandInput = DeleteSecretRequest;
export declare type DeleteSecretCommandOutput = DeleteSecretResponse & __MetadataBearer;
export declare class DeleteSecretCommand extends $Command<DeleteSecretCommandInput, DeleteSecretCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: DeleteSecretCommandInput;
    constructor(input: DeleteSecretCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSecretCommandInput, DeleteSecretCommandOutput>;
    private serialize;
    private deserialize;
}
