import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { UpdateLicenseSpecificationsForResourceRequest, UpdateLicenseSpecificationsForResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateLicenseSpecificationsForResourceCommandInput = UpdateLicenseSpecificationsForResourceRequest;
export declare type UpdateLicenseSpecificationsForResourceCommandOutput = UpdateLicenseSpecificationsForResourceResponse & __MetadataBearer;
export declare class UpdateLicenseSpecificationsForResourceCommand extends $Command<UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: UpdateLicenseSpecificationsForResourceCommandInput;
    constructor(input: UpdateLicenseSpecificationsForResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLicenseSpecificationsForResourceCommandInput, UpdateLicenseSpecificationsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
