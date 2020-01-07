import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { RemoveAccountFromOrganizationRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveAccountFromOrganizationCommandInput = RemoveAccountFromOrganizationRequest;
export declare type RemoveAccountFromOrganizationCommandOutput = __MetadataBearer;
export declare class RemoveAccountFromOrganizationCommand extends $Command<RemoveAccountFromOrganizationCommandInput, RemoveAccountFromOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: RemoveAccountFromOrganizationCommandInput;
    constructor(input: RemoveAccountFromOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveAccountFromOrganizationCommandInput, RemoveAccountFromOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
