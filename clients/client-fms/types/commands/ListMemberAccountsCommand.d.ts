import { FMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FMSClient";
import { ListMemberAccountsRequest, ListMemberAccountsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListMemberAccountsCommandInput = ListMemberAccountsRequest;
export declare type ListMemberAccountsCommandOutput = ListMemberAccountsResponse & __MetadataBearer;
export declare class ListMemberAccountsCommand extends $Command<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput, FMSClientResolvedConfig> {
    readonly input: ListMemberAccountsCommandInput;
    constructor(input: ListMemberAccountsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListMemberAccountsCommandInput, ListMemberAccountsCommandOutput>;
    private serialize;
    private deserialize;
}
