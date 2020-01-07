import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateAccessKeyRequest, CreateAccessKeyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAccessKeyCommandInput = CreateAccessKeyRequest;
export declare type CreateAccessKeyCommandOutput = CreateAccessKeyResponse & __MetadataBearer;
export declare class CreateAccessKeyCommand extends $Command<CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateAccessKeyCommandInput;
    constructor(input: CreateAccessKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput>;
    private serialize;
    private deserialize;
}
