import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { ListOrganizationsRequest, ListOrganizationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListOrganizationsCommandInput = ListOrganizationsRequest;
export declare type ListOrganizationsCommandOutput = ListOrganizationsResponse & __MetadataBearer;
export declare class ListOrganizationsCommand extends $Command<ListOrganizationsCommandInput, ListOrganizationsCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: ListOrganizationsCommandInput;
    constructor(input: ListOrganizationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOrganizationsCommandInput, ListOrganizationsCommandOutput>;
    private serialize;
    private deserialize;
}
