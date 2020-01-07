import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListAWSServiceAccessForOrganizationRequest, ListAWSServiceAccessForOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAWSServiceAccessForOrganizationCommandInput = ListAWSServiceAccessForOrganizationRequest;
export declare type ListAWSServiceAccessForOrganizationCommandOutput = ListAWSServiceAccessForOrganizationResponse & __MetadataBearer;
export declare class ListAWSServiceAccessForOrganizationCommand extends $Command<ListAWSServiceAccessForOrganizationCommandInput, ListAWSServiceAccessForOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListAWSServiceAccessForOrganizationCommandInput;
    constructor(input: ListAWSServiceAccessForOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAWSServiceAccessForOrganizationCommandInput, ListAWSServiceAccessForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
