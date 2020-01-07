import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { ListSecretsRequest, ListSecretsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSecretsCommandInput = ListSecretsRequest;
export declare type ListSecretsCommandOutput = ListSecretsResponse & __MetadataBearer;
export declare class ListSecretsCommand extends $Command<ListSecretsCommandInput, ListSecretsCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: ListSecretsCommandInput;
    constructor(input: ListSecretsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSecretsCommandInput, ListSecretsCommandOutput>;
    private serialize;
    private deserialize;
}
