import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeletePublicKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePublicKeyCommandInput = DeletePublicKeyRequest;
export declare type DeletePublicKeyCommandOutput = __MetadataBearer;
export declare class DeletePublicKeyCommand extends $Command<DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: DeletePublicKeyCommandInput;
    constructor(input: DeletePublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
