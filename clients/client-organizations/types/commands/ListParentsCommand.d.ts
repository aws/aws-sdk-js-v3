import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListParentsRequest, ListParentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListParentsCommandInput = ListParentsRequest;
export declare type ListParentsCommandOutput = ListParentsResponse & __MetadataBearer;
export declare class ListParentsCommand extends $Command<ListParentsCommandInput, ListParentsCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListParentsCommandInput;
    constructor(input: ListParentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListParentsCommandInput, ListParentsCommandOutput>;
    private serialize;
    private deserialize;
}
