import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListAccountsForParentRequest, ListAccountsForParentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAccountsForParentCommandInput = ListAccountsForParentRequest;
export declare type ListAccountsForParentCommandOutput = ListAccountsForParentResponse & __MetadataBearer;
export declare class ListAccountsForParentCommand extends $Command<ListAccountsForParentCommandInput, ListAccountsForParentCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListAccountsForParentCommandInput;
    constructor(input: ListAccountsForParentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAccountsForParentCommandInput, ListAccountsForParentCommandOutput>;
    private serialize;
    private deserialize;
}
