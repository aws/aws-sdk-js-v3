import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcEndpointRequest, CreateVpcEndpointResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpcEndpointCommandInput = CreateVpcEndpointRequest;
export declare type CreateVpcEndpointCommandOutput = CreateVpcEndpointResult & __MetadataBearer;
export declare class CreateVpcEndpointCommand extends $Command<CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpcEndpointCommandInput;
    constructor(input: CreateVpcEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
