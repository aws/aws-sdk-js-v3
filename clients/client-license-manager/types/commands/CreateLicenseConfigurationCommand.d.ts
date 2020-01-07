import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CreateLicenseConfigurationRequest, CreateLicenseConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLicenseConfigurationCommandInput = CreateLicenseConfigurationRequest;
export declare type CreateLicenseConfigurationCommandOutput = CreateLicenseConfigurationResponse & __MetadataBearer;
export declare class CreateLicenseConfigurationCommand extends $Command<CreateLicenseConfigurationCommandInput, CreateLicenseConfigurationCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: CreateLicenseConfigurationCommandInput;
    constructor(input: CreateLicenseConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLicenseConfigurationCommandInput, CreateLicenseConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
