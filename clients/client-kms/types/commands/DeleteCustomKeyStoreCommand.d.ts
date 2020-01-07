import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DeleteCustomKeyStoreRequest, DeleteCustomKeyStoreResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCustomKeyStoreCommandInput = DeleteCustomKeyStoreRequest;
export declare type DeleteCustomKeyStoreCommandOutput = DeleteCustomKeyStoreResponse & __MetadataBearer;
export declare class DeleteCustomKeyStoreCommand extends $Command<DeleteCustomKeyStoreCommandInput, DeleteCustomKeyStoreCommandOutput, KMSClientResolvedConfig> {
    readonly input: DeleteCustomKeyStoreCommandInput;
    constructor(input: DeleteCustomKeyStoreCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomKeyStoreCommandInput, DeleteCustomKeyStoreCommandOutput>;
    private serialize;
    private deserialize;
}
