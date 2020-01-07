import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcPeeringConnectionRequest, CreateVpcPeeringConnectionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpcPeeringConnectionCommandInput = CreateVpcPeeringConnectionRequest;
export declare type CreateVpcPeeringConnectionCommandOutput = CreateVpcPeeringConnectionResult & __MetadataBearer;
export declare class CreateVpcPeeringConnectionCommand extends $Command<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpcPeeringConnectionCommandInput;
    constructor(input: CreateVpcPeeringConnectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput>;
    private serialize;
    private deserialize;
}
