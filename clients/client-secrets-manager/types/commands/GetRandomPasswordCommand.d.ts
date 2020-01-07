import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { GetRandomPasswordRequest, GetRandomPasswordResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRandomPasswordCommandInput = GetRandomPasswordRequest;
export declare type GetRandomPasswordCommandOutput = GetRandomPasswordResponse & __MetadataBearer;
export declare class GetRandomPasswordCommand extends $Command<GetRandomPasswordCommandInput, GetRandomPasswordCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: GetRandomPasswordCommandInput;
    constructor(input: GetRandomPasswordCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRandomPasswordCommandInput, GetRandomPasswordCommandOutput>;
    private serialize;
    private deserialize;
}
