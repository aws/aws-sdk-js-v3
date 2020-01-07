import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreatePublicKeyRequest, CreatePublicKeyResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePublicKeyCommandInput = CreatePublicKeyRequest;
export declare type CreatePublicKeyCommandOutput = CreatePublicKeyResult & __MetadataBearer;
export declare class CreatePublicKeyCommand extends $Command<CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreatePublicKeyCommandInput;
    constructor(input: CreatePublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePublicKeyCommandInput, CreatePublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
