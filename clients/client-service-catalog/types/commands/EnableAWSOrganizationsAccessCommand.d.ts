import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { EnableAWSOrganizationsAccessInput, EnableAWSOrganizationsAccessOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableAWSOrganizationsAccessCommandInput = EnableAWSOrganizationsAccessInput;
export declare type EnableAWSOrganizationsAccessCommandOutput = EnableAWSOrganizationsAccessOutput & __MetadataBearer;
export declare class EnableAWSOrganizationsAccessCommand extends $Command<EnableAWSOrganizationsAccessCommandInput, EnableAWSOrganizationsAccessCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: EnableAWSOrganizationsAccessCommandInput;
    constructor(input: EnableAWSOrganizationsAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableAWSOrganizationsAccessCommandInput, EnableAWSOrganizationsAccessCommandOutput>;
    private serialize;
    private deserialize;
}
