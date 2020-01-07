import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListLicenseSpecificationsForResourceRequest, ListLicenseSpecificationsForResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLicenseSpecificationsForResourceCommandInput = ListLicenseSpecificationsForResourceRequest;
export declare type ListLicenseSpecificationsForResourceCommandOutput = ListLicenseSpecificationsForResourceResponse & __MetadataBearer;
export declare class ListLicenseSpecificationsForResourceCommand extends $Command<ListLicenseSpecificationsForResourceCommandInput, ListLicenseSpecificationsForResourceCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListLicenseSpecificationsForResourceCommandInput;
    constructor(input: ListLicenseSpecificationsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLicenseSpecificationsForResourceCommandInput, ListLicenseSpecificationsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
