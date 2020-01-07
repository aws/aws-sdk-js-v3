import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInterfaceAttributeRequest, DescribeNetworkInterfaceAttributeResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNetworkInterfaceAttributeCommandInput = DescribeNetworkInterfaceAttributeRequest;
export declare type DescribeNetworkInterfaceAttributeCommandOutput = DescribeNetworkInterfaceAttributeResult & __MetadataBearer;
export declare class DescribeNetworkInterfaceAttributeCommand extends $Command<DescribeNetworkInterfaceAttributeCommandInput, DescribeNetworkInterfaceAttributeCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkInterfaceAttributeCommandInput;
    constructor(input: DescribeNetworkInterfaceAttributeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkInterfaceAttributeCommandInput, DescribeNetworkInterfaceAttributeCommandOutput>;
    private serialize;
    private deserialize;
}
