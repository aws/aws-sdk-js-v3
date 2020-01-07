import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcRequest, CreateVpcResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateVpcCommandInput = CreateVpcRequest;
export declare type CreateVpcCommandOutput = CreateVpcResult & __MetadataBearer;
export declare class CreateVpcCommand extends $Command<CreateVpcCommandInput, CreateVpcCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateVpcCommandInput;
    constructor(input: CreateVpcCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateVpcCommandInput, CreateVpcCommandOutput>;
    private serialize;
    private deserialize;
}
