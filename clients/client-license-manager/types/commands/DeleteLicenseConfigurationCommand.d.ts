import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { DeleteLicenseConfigurationRequest, DeleteLicenseConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLicenseConfigurationCommandInput = DeleteLicenseConfigurationRequest;
export declare type DeleteLicenseConfigurationCommandOutput = DeleteLicenseConfigurationResponse & __MetadataBearer;
export declare class DeleteLicenseConfigurationCommand extends $Command<DeleteLicenseConfigurationCommandInput, DeleteLicenseConfigurationCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: DeleteLicenseConfigurationCommandInput;
    constructor(input: DeleteLicenseConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLicenseConfigurationCommandInput, DeleteLicenseConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
