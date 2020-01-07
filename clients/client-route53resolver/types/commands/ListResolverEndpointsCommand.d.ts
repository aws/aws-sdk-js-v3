import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverEndpointsRequest, ListResolverEndpointsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResolverEndpointsCommandInput = ListResolverEndpointsRequest;
export declare type ListResolverEndpointsCommandOutput = ListResolverEndpointsResponse & __MetadataBearer;
export declare class ListResolverEndpointsCommand extends $Command<ListResolverEndpointsCommandInput, ListResolverEndpointsCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverEndpointsCommandInput;
    constructor(input: ListResolverEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverEndpointsCommandInput, ListResolverEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
