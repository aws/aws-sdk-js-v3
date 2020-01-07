import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { UpdateResolverEndpointRequest, UpdateResolverEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateResolverEndpointCommandInput = UpdateResolverEndpointRequest;
export declare type UpdateResolverEndpointCommandOutput = UpdateResolverEndpointResponse & __MetadataBearer;
export declare class UpdateResolverEndpointCommand extends $Command<UpdateResolverEndpointCommandInput, UpdateResolverEndpointCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: UpdateResolverEndpointCommandInput;
    constructor(input: UpdateResolverEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateResolverEndpointCommandInput, UpdateResolverEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
