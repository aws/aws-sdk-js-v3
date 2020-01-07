import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeLDAPSSettingsRequest, DescribeLDAPSSettingsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLDAPSSettingsCommandInput = DescribeLDAPSSettingsRequest;
export declare type DescribeLDAPSSettingsCommandOutput = DescribeLDAPSSettingsResult & __MetadataBearer;
export declare class DescribeLDAPSSettingsCommand extends $Command<DescribeLDAPSSettingsCommandInput, DescribeLDAPSSettingsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeLDAPSSettingsCommandInput;
    constructor(input: DescribeLDAPSSettingsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLDAPSSettingsCommandInput, DescribeLDAPSSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
