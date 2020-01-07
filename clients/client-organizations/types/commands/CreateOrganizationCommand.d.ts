import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateOrganizationRequest, CreateOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateOrganizationCommandInput = CreateOrganizationRequest;
export declare type CreateOrganizationCommandOutput = CreateOrganizationResponse & __MetadataBearer;
export declare class CreateOrganizationCommand extends $Command<CreateOrganizationCommandInput, CreateOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: CreateOrganizationCommandInput;
    constructor(input: CreateOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOrganizationCommandInput, CreateOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
