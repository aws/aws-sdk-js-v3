import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListAssociationsForLicenseConfigurationRequest, ListAssociationsForLicenseConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssociationsForLicenseConfigurationCommandInput = ListAssociationsForLicenseConfigurationRequest;
export declare type ListAssociationsForLicenseConfigurationCommandOutput = ListAssociationsForLicenseConfigurationResponse & __MetadataBearer;
export declare class ListAssociationsForLicenseConfigurationCommand extends $Command<ListAssociationsForLicenseConfigurationCommandInput, ListAssociationsForLicenseConfigurationCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListAssociationsForLicenseConfigurationCommandInput;
    constructor(input: ListAssociationsForLicenseConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociationsForLicenseConfigurationCommandInput, ListAssociationsForLicenseConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
