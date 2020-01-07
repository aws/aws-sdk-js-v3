import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteKnownHostKeysRequest, DeleteKnownHostKeysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteKnownHostKeysCommandInput = DeleteKnownHostKeysRequest;
export declare type DeleteKnownHostKeysCommandOutput = DeleteKnownHostKeysResult & __MetadataBearer;
export declare class DeleteKnownHostKeysCommand extends $Command<DeleteKnownHostKeysCommandInput, DeleteKnownHostKeysCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteKnownHostKeysCommandInput;
    constructor(input: DeleteKnownHostKeysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteKnownHostKeysCommandInput, DeleteKnownHostKeysCommandOutput>;
    private serialize;
    private deserialize;
}
