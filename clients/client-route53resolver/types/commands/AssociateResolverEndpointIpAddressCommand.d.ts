import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { AssociateResolverEndpointIpAddressRequest, AssociateResolverEndpointIpAddressResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateResolverEndpointIpAddressCommandInput = AssociateResolverEndpointIpAddressRequest;
export declare type AssociateResolverEndpointIpAddressCommandOutput = AssociateResolverEndpointIpAddressResponse & __MetadataBearer;
export declare class AssociateResolverEndpointIpAddressCommand extends $Command<AssociateResolverEndpointIpAddressCommandInput, AssociateResolverEndpointIpAddressCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: AssociateResolverEndpointIpAddressCommandInput;
    constructor(input: AssociateResolverEndpointIpAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateResolverEndpointIpAddressCommandInput, AssociateResolverEndpointIpAddressCommandOutput>;
    private serialize;
    private deserialize;
}
