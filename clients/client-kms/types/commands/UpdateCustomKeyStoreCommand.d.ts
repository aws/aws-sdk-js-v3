import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { UpdateCustomKeyStoreRequest, UpdateCustomKeyStoreResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCustomKeyStoreCommandInput = UpdateCustomKeyStoreRequest;
export declare type UpdateCustomKeyStoreCommandOutput = UpdateCustomKeyStoreResponse & __MetadataBearer;
export declare class UpdateCustomKeyStoreCommand extends $Command<UpdateCustomKeyStoreCommandInput, UpdateCustomKeyStoreCommandOutput, KMSClientResolvedConfig> {
    readonly input: UpdateCustomKeyStoreCommandInput;
    constructor(input: UpdateCustomKeyStoreCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCustomKeyStoreCommandInput, UpdateCustomKeyStoreCommandOutput>;
    private serialize;
    private deserialize;
}
