import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateDefaultSubnetRequest, CreateDefaultSubnetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDefaultSubnetCommandInput = CreateDefaultSubnetRequest;
export declare type CreateDefaultSubnetCommandOutput = CreateDefaultSubnetResult & __MetadataBearer;
export declare class CreateDefaultSubnetCommand extends $Command<CreateDefaultSubnetCommandInput, CreateDefaultSubnetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateDefaultSubnetCommandInput;
    constructor(input: CreateDefaultSubnetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDefaultSubnetCommandInput, CreateDefaultSubnetCommandOutput>;
    private serialize;
    private deserialize;
}
