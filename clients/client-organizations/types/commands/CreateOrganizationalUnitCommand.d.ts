import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateOrganizationalUnitRequest, CreateOrganizationalUnitResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateOrganizationalUnitCommandInput = CreateOrganizationalUnitRequest;
export declare type CreateOrganizationalUnitCommandOutput = CreateOrganizationalUnitResponse & __MetadataBearer;
export declare class CreateOrganizationalUnitCommand extends $Command<CreateOrganizationalUnitCommandInput, CreateOrganizationalUnitCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: CreateOrganizationalUnitCommandInput;
    constructor(input: CreateOrganizationalUnitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateOrganizationalUnitCommandInput, CreateOrganizationalUnitCommandOutput>;
    private serialize;
    private deserialize;
}
