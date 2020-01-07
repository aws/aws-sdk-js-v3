import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { InviteAccountToOrganizationRequest, InviteAccountToOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type InviteAccountToOrganizationCommandInput = InviteAccountToOrganizationRequest;
export declare type InviteAccountToOrganizationCommandOutput = InviteAccountToOrganizationResponse & __MetadataBearer;
export declare class InviteAccountToOrganizationCommand extends $Command<InviteAccountToOrganizationCommandInput, InviteAccountToOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: InviteAccountToOrganizationCommandInput;
    constructor(input: InviteAccountToOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<InviteAccountToOrganizationCommandInput, InviteAccountToOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
