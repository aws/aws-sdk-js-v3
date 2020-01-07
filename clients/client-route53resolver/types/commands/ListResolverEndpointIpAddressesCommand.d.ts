import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListResolverEndpointIpAddressesRequest, ListResolverEndpointIpAddressesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListResolverEndpointIpAddressesCommandInput = ListResolverEndpointIpAddressesRequest;
export declare type ListResolverEndpointIpAddressesCommandOutput = ListResolverEndpointIpAddressesResponse & __MetadataBearer;
export declare class ListResolverEndpointIpAddressesCommand extends $Command<ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: ListResolverEndpointIpAddressesCommandInput;
    constructor(input: ListResolverEndpointIpAddressesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListResolverEndpointIpAddressesCommandInput, ListResolverEndpointIpAddressesCommandOutput>;
    private serialize;
    private deserialize;
}
