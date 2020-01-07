import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { GetAWSOrganizationsAccessStatusInput, GetAWSOrganizationsAccessStatusOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAWSOrganizationsAccessStatusCommandInput = GetAWSOrganizationsAccessStatusInput;
export declare type GetAWSOrganizationsAccessStatusCommandOutput = GetAWSOrganizationsAccessStatusOutput & __MetadataBearer;
export declare class GetAWSOrganizationsAccessStatusCommand extends $Command<GetAWSOrganizationsAccessStatusCommandInput, GetAWSOrganizationsAccessStatusCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: GetAWSOrganizationsAccessStatusCommandInput;
    constructor(input: GetAWSOrganizationsAccessStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAWSOrganizationsAccessStatusCommandInput, GetAWSOrganizationsAccessStatusCommandOutput>;
    private serialize;
    private deserialize;
}
