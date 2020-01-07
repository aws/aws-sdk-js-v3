import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetGroupCertificateConfigurationRequest, GetGroupCertificateConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetGroupCertificateConfigurationCommandInput = GetGroupCertificateConfigurationRequest;
export declare type GetGroupCertificateConfigurationCommandOutput = GetGroupCertificateConfigurationResponse & __MetadataBearer;
export declare class GetGroupCertificateConfigurationCommand extends $Command<GetGroupCertificateConfigurationCommandInput, GetGroupCertificateConfigurationCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: GetGroupCertificateConfigurationCommandInput;
    constructor(input: GetGroupCertificateConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGroupCertificateConfigurationCommandInput, GetGroupCertificateConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
