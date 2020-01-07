import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { CreateResolverEndpointRequest, CreateResolverEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateResolverEndpointCommandInput = CreateResolverEndpointRequest;
export declare type CreateResolverEndpointCommandOutput = CreateResolverEndpointResponse & __MetadataBearer;
export declare class CreateResolverEndpointCommand extends $Command<CreateResolverEndpointCommandInput, CreateResolverEndpointCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: CreateResolverEndpointCommandInput;
    constructor(input: CreateResolverEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateResolverEndpointCommandInput, CreateResolverEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
