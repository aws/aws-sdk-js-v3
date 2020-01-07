import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeAddressesRequest, DescribeAddressesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAddressesCommandInput = DescribeAddressesRequest;
export declare type DescribeAddressesCommandOutput = DescribeAddressesResult & __MetadataBearer;
export declare class DescribeAddressesCommand extends $Command<DescribeAddressesCommandInput, DescribeAddressesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeAddressesCommandInput;
    constructor(input: DescribeAddressesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAddressesCommandInput, DescribeAddressesCommandOutput>;
    private serialize;
    private deserialize;
}
