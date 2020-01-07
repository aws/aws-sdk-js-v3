import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateGroupCertificateConfigurationRequest, UpdateGroupCertificateConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateGroupCertificateConfigurationCommandInput = UpdateGroupCertificateConfigurationRequest;
export declare type UpdateGroupCertificateConfigurationCommandOutput = UpdateGroupCertificateConfigurationResponse & __MetadataBearer;
export declare class UpdateGroupCertificateConfigurationCommand extends $Command<UpdateGroupCertificateConfigurationCommandInput, UpdateGroupCertificateConfigurationCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: UpdateGroupCertificateConfigurationCommandInput;
    constructor(input: UpdateGroupCertificateConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateGroupCertificateConfigurationCommandInput, UpdateGroupCertificateConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
