import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSubnetRequest, CreateSubnetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSubnetCommandInput = CreateSubnetRequest;
export declare type CreateSubnetCommandOutput = CreateSubnetResult & __MetadataBearer;
export declare class CreateSubnetCommand extends $Command<CreateSubnetCommandInput, CreateSubnetCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateSubnetCommandInput;
    constructor(input: CreateSubnetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSubnetCommandInput, CreateSubnetCommandOutput>;
    private serialize;
    private deserialize;
}
