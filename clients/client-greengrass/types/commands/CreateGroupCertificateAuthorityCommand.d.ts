import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateGroupCertificateAuthorityRequest, CreateGroupCertificateAuthorityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGroupCertificateAuthorityCommandInput = CreateGroupCertificateAuthorityRequest;
export declare type CreateGroupCertificateAuthorityCommandOutput = CreateGroupCertificateAuthorityResponse & __MetadataBearer;
export declare class CreateGroupCertificateAuthorityCommand extends $Command<CreateGroupCertificateAuthorityCommandInput, CreateGroupCertificateAuthorityCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: CreateGroupCertificateAuthorityCommandInput;
    constructor(input: CreateGroupCertificateAuthorityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGroupCertificateAuthorityCommandInput, CreateGroupCertificateAuthorityCommandOutput>;
    private serialize;
    private deserialize;
}
