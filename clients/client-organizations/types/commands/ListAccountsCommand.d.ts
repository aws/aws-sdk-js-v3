import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListAccountsRequest, ListAccountsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAccountsCommandInput = ListAccountsRequest;
export declare type ListAccountsCommandOutput = ListAccountsResponse & __MetadataBearer;
export declare class ListAccountsCommand extends $Command<ListAccountsCommandInput, ListAccountsCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListAccountsCommandInput;
    constructor(input: ListAccountsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccountsCommandInput, ListAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
