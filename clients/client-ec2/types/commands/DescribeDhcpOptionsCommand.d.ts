import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeDhcpOptionsRequest, DescribeDhcpOptionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDhcpOptionsCommandInput = DescribeDhcpOptionsRequest;
export declare type DescribeDhcpOptionsCommandOutput = DescribeDhcpOptionsResult & __MetadataBearer;
export declare class DescribeDhcpOptionsCommand extends $Command<DescribeDhcpOptionsCommandInput, DescribeDhcpOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeDhcpOptionsCommandInput;
    constructor(input: DescribeDhcpOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDhcpOptionsCommandInput, DescribeDhcpOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
