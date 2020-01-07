import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupCertificateAuthorityRequest, GetGroupCertificateAuthorityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGroupCertificateAuthorityCommandInput = GetGroupCertificateAuthorityRequest;
export declare type GetGroupCertificateAuthorityCommandOutput = GetGroupCertificateAuthorityResponse & __MetadataBearer;
export declare class GetGroupCertificateAuthorityCommand extends $Command<GetGroupCertificateAuthorityCommandInput, GetGroupCertificateAuthorityCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetGroupCertificateAuthorityCommandInput;
    constructor(input: GetGroupCertificateAuthorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupCertificateAuthorityCommandInput, GetGroupCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
