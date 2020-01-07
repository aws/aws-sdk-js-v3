import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListHandshakesForAccountRequest, ListHandshakesForAccountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHandshakesForAccountCommandInput = ListHandshakesForAccountRequest;
export declare type ListHandshakesForAccountCommandOutput = ListHandshakesForAccountResponse & __MetadataBearer;
export declare class ListHandshakesForAccountCommand extends $Command<ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListHandshakesForAccountCommandInput;
    constructor(input: ListHandshakesForAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput>;
    private serialize;
    private deserialize;
}
