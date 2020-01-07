import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptVpcPeeringConnectionRequest, AcceptVpcPeeringConnectionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptVpcPeeringConnectionCommandInput = AcceptVpcPeeringConnectionRequest;
export declare type AcceptVpcPeeringConnectionCommandOutput = AcceptVpcPeeringConnectionResult & __MetadataBearer;
export declare class AcceptVpcPeeringConnectionCommand extends $Command<AcceptVpcPeeringConnectionCommandInput, AcceptVpcPeeringConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AcceptVpcPeeringConnectionCommandInput;
    constructor(input: AcceptVpcPeeringConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptVpcPeeringConnectionCommandInput, AcceptVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
