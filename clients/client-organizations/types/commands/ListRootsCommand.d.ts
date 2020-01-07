import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { ListRootsRequest, ListRootsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRootsCommandInput = ListRootsRequest;
export declare type ListRootsCommandOutput = ListRootsResponse & __MetadataBearer;
export declare class ListRootsCommand extends $Command<ListRootsCommandInput, ListRootsCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: ListRootsCommandInput;
    constructor(input: ListRootsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRootsCommandInput, ListRootsCommandOutput>;
    private serialize;
    private deserialize;
}
