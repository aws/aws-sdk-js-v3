import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseConfigurationRequest, GetLicenseConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetLicenseConfigurationCommandInput = GetLicenseConfigurationRequest;
export declare type GetLicenseConfigurationCommandOutput = GetLicenseConfigurationResponse & __MetadataBearer;
export declare class GetLicenseConfigurationCommand extends $Command<GetLicenseConfigurationCommandInput, GetLicenseConfigurationCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: GetLicenseConfigurationCommandInput;
    constructor(input: GetLicenseConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLicenseConfigurationCommandInput, GetLicenseConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
