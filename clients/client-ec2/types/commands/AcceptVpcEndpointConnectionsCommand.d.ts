import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptVpcEndpointConnectionsRequest, AcceptVpcEndpointConnectionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptVpcEndpointConnectionsCommandInput = AcceptVpcEndpointConnectionsRequest;
export declare type AcceptVpcEndpointConnectionsCommandOutput = AcceptVpcEndpointConnectionsResult & __MetadataBearer;
export declare class AcceptVpcEndpointConnectionsCommand extends $Command<AcceptVpcEndpointConnectionsCommandInput, AcceptVpcEndpointConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AcceptVpcEndpointConnectionsCommandInput;
    constructor(input: AcceptVpcEndpointConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptVpcEndpointConnectionsCommandInput, AcceptVpcEndpointConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
