import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DeleteResolverEndpointRequest, DeleteResolverEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteResolverEndpointCommandInput = DeleteResolverEndpointRequest;
export declare type DeleteResolverEndpointCommandOutput = DeleteResolverEndpointResponse & __MetadataBearer;
export declare class DeleteResolverEndpointCommand extends $Command<DeleteResolverEndpointCommandInput, DeleteResolverEndpointCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DeleteResolverEndpointCommandInput;
    constructor(input: DeleteResolverEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteResolverEndpointCommandInput, DeleteResolverEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
