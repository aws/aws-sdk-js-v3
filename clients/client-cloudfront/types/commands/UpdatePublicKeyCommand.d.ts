import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdatePublicKeyRequest, UpdatePublicKeyResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePublicKeyCommandInput = UpdatePublicKeyRequest;
export declare type UpdatePublicKeyCommandOutput = UpdatePublicKeyResult & __MetadataBearer;
export declare class UpdatePublicKeyCommand extends $Command<UpdatePublicKeyCommandInput, UpdatePublicKeyCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: UpdatePublicKeyCommandInput;
    constructor(input: UpdatePublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePublicKeyCommandInput, UpdatePublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
