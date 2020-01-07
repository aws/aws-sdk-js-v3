import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { UpdateLicenseConfigurationRequest, UpdateLicenseConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateLicenseConfigurationCommandInput = UpdateLicenseConfigurationRequest;
export declare type UpdateLicenseConfigurationCommandOutput = UpdateLicenseConfigurationResponse & __MetadataBearer;
export declare class UpdateLicenseConfigurationCommand extends $Command<UpdateLicenseConfigurationCommandInput, UpdateLicenseConfigurationCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: UpdateLicenseConfigurationCommandInput;
    constructor(input: UpdateLicenseConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLicenseConfigurationCommandInput, UpdateLicenseConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
