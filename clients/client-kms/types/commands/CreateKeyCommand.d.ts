import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CreateKeyRequest, CreateKeyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateKeyCommandInput = CreateKeyRequest;
export declare type CreateKeyCommandOutput = CreateKeyResponse & __MetadataBearer;
export declare class CreateKeyCommand extends $Command<CreateKeyCommandInput, CreateKeyCommandOutput, KMSClientResolvedConfig> {
    readonly input: CreateKeyCommandInput;
    constructor(input: CreateKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateKeyCommandInput, CreateKeyCommandOutput>;
    private serialize;
    private deserialize;
}
