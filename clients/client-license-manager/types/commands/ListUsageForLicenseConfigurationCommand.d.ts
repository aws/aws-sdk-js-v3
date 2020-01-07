import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListUsageForLicenseConfigurationRequest, ListUsageForLicenseConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListUsageForLicenseConfigurationCommandInput = ListUsageForLicenseConfigurationRequest;
export declare type ListUsageForLicenseConfigurationCommandOutput = ListUsageForLicenseConfigurationResponse & __MetadataBearer;
export declare class ListUsageForLicenseConfigurationCommand extends $Command<ListUsageForLicenseConfigurationCommandInput, ListUsageForLicenseConfigurationCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListUsageForLicenseConfigurationCommandInput;
    constructor(input: ListUsageForLicenseConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListUsageForLicenseConfigurationCommandInput, ListUsageForLicenseConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
