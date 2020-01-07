import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { GetResolverEndpointRequest, GetResolverEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetResolverEndpointCommandInput = GetResolverEndpointRequest;
export declare type GetResolverEndpointCommandOutput = GetResolverEndpointResponse & __MetadataBearer;
export declare class GetResolverEndpointCommand extends $Command<GetResolverEndpointCommandInput, GetResolverEndpointCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: GetResolverEndpointCommandInput;
    constructor(input: GetResolverEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetResolverEndpointCommandInput, GetResolverEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
