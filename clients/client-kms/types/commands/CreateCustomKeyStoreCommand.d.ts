import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CreateCustomKeyStoreRequest, CreateCustomKeyStoreResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCustomKeyStoreCommandInput = CreateCustomKeyStoreRequest;
export declare type CreateCustomKeyStoreCommandOutput = CreateCustomKeyStoreResponse & __MetadataBearer;
export declare class CreateCustomKeyStoreCommand extends $Command<CreateCustomKeyStoreCommandInput, CreateCustomKeyStoreCommandOutput, KMSClientResolvedConfig> {
    readonly input: CreateCustomKeyStoreCommandInput;
    constructor(input: CreateCustomKeyStoreCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomKeyStoreCommandInput, CreateCustomKeyStoreCommandOutput>;
    private serialize;
    private deserialize;
}
