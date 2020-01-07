import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";
import { ListSecretVersionIdsRequest, ListSecretVersionIdsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSecretVersionIdsCommandInput = ListSecretVersionIdsRequest;
export declare type ListSecretVersionIdsCommandOutput = ListSecretVersionIdsResponse & __MetadataBearer;
export declare class ListSecretVersionIdsCommand extends $Command<ListSecretVersionIdsCommandInput, ListSecretVersionIdsCommandOutput, SecretsManagerClientResolvedConfig> {
    readonly input: ListSecretVersionIdsCommandInput;
    constructor(input: ListSecretVersionIdsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SecretsManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSecretVersionIdsCommandInput, ListSecretVersionIdsCommandOutput>;
    private serialize;
    private deserialize;
}
