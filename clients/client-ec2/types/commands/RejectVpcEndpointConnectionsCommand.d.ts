import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectVpcEndpointConnectionsRequest, RejectVpcEndpointConnectionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectVpcEndpointConnectionsCommandInput = RejectVpcEndpointConnectionsRequest;
export declare type RejectVpcEndpointConnectionsCommandOutput = RejectVpcEndpointConnectionsResult & __MetadataBearer;
export declare class RejectVpcEndpointConnectionsCommand extends $Command<RejectVpcEndpointConnectionsCommandInput, RejectVpcEndpointConnectionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RejectVpcEndpointConnectionsCommandInput;
    constructor(input: RejectVpcEndpointConnectionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectVpcEndpointConnectionsCommandInput, RejectVpcEndpointConnectionsCommandOutput>;
    private serialize;
    private deserialize;
}
