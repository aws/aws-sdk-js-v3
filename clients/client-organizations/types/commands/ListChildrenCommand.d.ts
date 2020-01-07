import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListChildrenRequest, ListChildrenResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListChildrenCommandInput = ListChildrenRequest;
export declare type ListChildrenCommandOutput = ListChildrenResponse & __MetadataBearer;
export declare class ListChildrenCommand extends $Command<ListChildrenCommandInput, ListChildrenCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListChildrenCommandInput;
    constructor(input: ListChildrenCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListChildrenCommandInput, ListChildrenCommandOutput>;
    private serialize;
    private deserialize;
}
