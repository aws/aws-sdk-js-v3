import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { UpdateOrganizationalUnitRequest, UpdateOrganizationalUnitResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateOrganizationalUnitCommandInput = UpdateOrganizationalUnitRequest;
export declare type UpdateOrganizationalUnitCommandOutput = UpdateOrganizationalUnitResponse & __MetadataBearer;
export declare class UpdateOrganizationalUnitCommand extends $Command<UpdateOrganizationalUnitCommandInput, UpdateOrganizationalUnitCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: UpdateOrganizationalUnitCommandInput;
    constructor(input: UpdateOrganizationalUnitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateOrganizationalUnitCommandInput, UpdateOrganizationalUnitCommandOutput>;
    private serialize;
    private deserialize;
}
