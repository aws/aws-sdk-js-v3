import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DeleteOrganizationalUnitRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteOrganizationalUnitCommandInput = DeleteOrganizationalUnitRequest;
export declare type DeleteOrganizationalUnitCommandOutput = __MetadataBearer;
export declare class DeleteOrganizationalUnitCommand extends $Command<DeleteOrganizationalUnitCommandInput, DeleteOrganizationalUnitCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DeleteOrganizationalUnitCommandInput;
    constructor(input: DeleteOrganizationalUnitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOrganizationalUnitCommandInput, DeleteOrganizationalUnitCommandOutput>;
    private serialize;
    private deserialize;
}
