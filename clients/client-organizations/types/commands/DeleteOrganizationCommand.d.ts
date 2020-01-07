import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteOrganizationCommandInput = {};
export declare type DeleteOrganizationCommandOutput = __MetadataBearer;
export declare class DeleteOrganizationCommand extends $Command<DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DeleteOrganizationCommandInput;
    constructor(input: DeleteOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
