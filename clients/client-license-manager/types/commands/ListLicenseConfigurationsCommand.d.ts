import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListLicenseConfigurationsRequest, ListLicenseConfigurationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLicenseConfigurationsCommandInput = ListLicenseConfigurationsRequest;
export declare type ListLicenseConfigurationsCommandOutput = ListLicenseConfigurationsResponse & __MetadataBearer;
export declare class ListLicenseConfigurationsCommand extends $Command<ListLicenseConfigurationsCommandInput, ListLicenseConfigurationsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListLicenseConfigurationsCommandInput;
    constructor(input: ListLicenseConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLicenseConfigurationsCommandInput, ListLicenseConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
