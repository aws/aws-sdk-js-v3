import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateDefaultVpcRequest, CreateDefaultVpcResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDefaultVpcCommandInput = CreateDefaultVpcRequest;
export declare type CreateDefaultVpcCommandOutput = CreateDefaultVpcResult & __MetadataBearer;
export declare class CreateDefaultVpcCommand extends $Command<CreateDefaultVpcCommandInput, CreateDefaultVpcCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateDefaultVpcCommandInput;
    constructor(input: CreateDefaultVpcCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDefaultVpcCommandInput, CreateDefaultVpcCommandOutput>;
    private serialize;
    private deserialize;
}
