import { MacieClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MacieClient";
import { ListMemberAccountsRequest, ListMemberAccountsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMemberAccountsCommandInput = ListMemberAccountsRequest;
export declare type ListMemberAccountsCommandOutput = ListMemberAccountsResult & __MetadataBearer;
export declare class ListMemberAccountsCommand extends $Command<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput, MacieClientResolvedConfig> {
    readonly input: ListMemberAccountsCommandInput;
    constructor(input: ListMemberAccountsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MacieClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
