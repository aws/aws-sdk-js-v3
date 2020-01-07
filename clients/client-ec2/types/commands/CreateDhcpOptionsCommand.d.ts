import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateDhcpOptionsRequest, CreateDhcpOptionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDhcpOptionsCommandInput = CreateDhcpOptionsRequest;
export declare type CreateDhcpOptionsCommandOutput = CreateDhcpOptionsResult & __MetadataBearer;
export declare class CreateDhcpOptionsCommand extends $Command<CreateDhcpOptionsCommandInput, CreateDhcpOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateDhcpOptionsCommandInput;
    constructor(input: CreateDhcpOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDhcpOptionsCommandInput, CreateDhcpOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
