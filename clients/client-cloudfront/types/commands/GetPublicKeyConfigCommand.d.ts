import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetPublicKeyConfigRequest, GetPublicKeyConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPublicKeyConfigCommandInput = GetPublicKeyConfigRequest;
export declare type GetPublicKeyConfigCommandOutput = GetPublicKeyConfigResult & __MetadataBearer;
export declare class GetPublicKeyConfigCommand extends $Command<GetPublicKeyConfigCommandInput, GetPublicKeyConfigCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetPublicKeyConfigCommandInput;
    constructor(input: GetPublicKeyConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPublicKeyConfigCommandInput, GetPublicKeyConfigCommandOutput>;
    private serialize;
    private deserialize;
}
