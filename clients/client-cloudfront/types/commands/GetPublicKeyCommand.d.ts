import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetPublicKeyRequest, GetPublicKeyResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPublicKeyCommandInput = GetPublicKeyRequest;
export declare type GetPublicKeyCommandOutput = GetPublicKeyResult & __MetadataBearer;
export declare class GetPublicKeyCommand extends $Command<GetPublicKeyCommandInput, GetPublicKeyCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetPublicKeyCommandInput;
    constructor(input: GetPublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPublicKeyCommandInput, GetPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
