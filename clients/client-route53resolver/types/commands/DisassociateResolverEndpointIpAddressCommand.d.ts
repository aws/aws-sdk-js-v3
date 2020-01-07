import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { DisassociateResolverEndpointIpAddressRequest, DisassociateResolverEndpointIpAddressResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateResolverEndpointIpAddressCommandInput = DisassociateResolverEndpointIpAddressRequest;
export declare type DisassociateResolverEndpointIpAddressCommandOutput = DisassociateResolverEndpointIpAddressResponse & __MetadataBearer;
export declare class DisassociateResolverEndpointIpAddressCommand extends $Command<DisassociateResolverEndpointIpAddressCommandInput, DisassociateResolverEndpointIpAddressCommandOutput, Route53ResolverClientResolvedConfig> {
    readonly input: DisassociateResolverEndpointIpAddressCommandInput;
    constructor(input: DisassociateResolverEndpointIpAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ResolverClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateResolverEndpointIpAddressCommandInput, DisassociateResolverEndpointIpAddressCommandOutput>;
    private serialize;
    private deserialize;
}
