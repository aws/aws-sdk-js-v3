import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListHandshakesForOrganizationRequest, ListHandshakesForOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHandshakesForOrganizationCommandInput = ListHandshakesForOrganizationRequest;
export declare type ListHandshakesForOrganizationCommandOutput = ListHandshakesForOrganizationResponse & __MetadataBearer;
export declare class ListHandshakesForOrganizationCommand extends $Command<ListHandshakesForOrganizationCommandInput, ListHandshakesForOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListHandshakesForOrganizationCommandInput;
    constructor(input: ListHandshakesForOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHandshakesForOrganizationCommandInput, ListHandshakesForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
