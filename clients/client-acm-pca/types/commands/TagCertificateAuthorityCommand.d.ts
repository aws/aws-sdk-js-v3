import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { TagCertificateAuthorityRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TagCertificateAuthorityCommandInput = TagCertificateAuthorityRequest;
export declare type TagCertificateAuthorityCommandOutput = __MetadataBearer;
export declare class TagCertificateAuthorityCommand extends $Command<TagCertificateAuthorityCommandInput, TagCertificateAuthorityCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: TagCertificateAuthorityCommandInput;
    constructor(input: TagCertificateAuthorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TagCertificateAuthorityCommandInput, TagCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
