import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { UpdateSecretVersionStageRequest, UpdateSecretVersionStageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSecretVersionStageCommandInput = UpdateSecretVersionStageRequest;
export declare type UpdateSecretVersionStageCommandOutput = UpdateSecretVersionStageResponse & __MetadataBearer;
export declare class UpdateSecretVersionStageCommand extends $Command<UpdateSecretVersionStageCommandInput, UpdateSecretVersionStageCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: UpdateSecretVersionStageCommandInput;
    constructor(input: UpdateSecretVersionStageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSecretVersionStageCommandInput, UpdateSecretVersionStageCommandOutput>;
    private serialize;
    private deserialize;
}
