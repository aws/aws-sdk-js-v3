import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { DisableAWSOrganizationsAccessInput, DisableAWSOrganizationsAccessOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableAWSOrganizationsAccessCommandInput = DisableAWSOrganizationsAccessInput;
export declare type DisableAWSOrganizationsAccessCommandOutput = DisableAWSOrganizationsAccessOutput & __MetadataBearer;
export declare class DisableAWSOrganizationsAccessCommand extends $Command<DisableAWSOrganizationsAccessCommandInput, DisableAWSOrganizationsAccessCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: DisableAWSOrganizationsAccessCommandInput;
    constructor(input: DisableAWSOrganizationsAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableAWSOrganizationsAccessCommandInput, DisableAWSOrganizationsAccessCommandOutput>;
    private serialize;
    private deserialize;
}
