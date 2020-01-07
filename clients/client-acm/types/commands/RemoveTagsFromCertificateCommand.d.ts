import { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { RemoveTagsFromCertificateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTagsFromCertificateCommandInput = RemoveTagsFromCertificateRequest;
export declare type RemoveTagsFromCertificateCommandOutput = __MetadataBearer;
export declare class RemoveTagsFromCertificateCommand extends $Command<RemoveTagsFromCertificateCommandInput, RemoveTagsFromCertificateCommandOutput, ACMClientResolvedConfig> {
    readonly input: RemoveTagsFromCertificateCommandInput;
    constructor(input: RemoveTagsFromCertificateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTagsFromCertificateCommandInput, RemoveTagsFromCertificateCommandOutput>;
    private serialize;
    private deserialize;
}
