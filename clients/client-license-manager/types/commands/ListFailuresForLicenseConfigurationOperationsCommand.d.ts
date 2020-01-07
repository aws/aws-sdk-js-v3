import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListFailuresForLicenseConfigurationOperationsRequest, ListFailuresForLicenseConfigurationOperationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListFailuresForLicenseConfigurationOperationsCommandInput = ListFailuresForLicenseConfigurationOperationsRequest;
export declare type ListFailuresForLicenseConfigurationOperationsCommandOutput = ListFailuresForLicenseConfigurationOperationsResponse & __MetadataBearer;
export declare class ListFailuresForLicenseConfigurationOperationsCommand extends $Command<ListFailuresForLicenseConfigurationOperationsCommandInput, ListFailuresForLicenseConfigurationOperationsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListFailuresForLicenseConfigurationOperationsCommandInput;
    constructor(input: ListFailuresForLicenseConfigurationOperationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFailuresForLicenseConfigurationOperationsCommandInput, ListFailuresForLicenseConfigurationOperationsCommandOutput>;
    private serialize;
    private deserialize;
}
