import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectVpcPeeringConnectionRequest, RejectVpcPeeringConnectionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectVpcPeeringConnectionCommandInput = RejectVpcPeeringConnectionRequest;
export declare type RejectVpcPeeringConnectionCommandOutput = RejectVpcPeeringConnectionResult & __MetadataBearer;
export declare class RejectVpcPeeringConnectionCommand extends $Command<RejectVpcPeeringConnectionCommandInput, RejectVpcPeeringConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RejectVpcPeeringConnectionCommandInput;
    constructor(input: RejectVpcPeeringConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectVpcPeeringConnectionCommandInput, RejectVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
