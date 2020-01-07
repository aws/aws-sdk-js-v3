import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInterfacesRequest, DescribeNetworkInterfacesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNetworkInterfacesCommandInput = DescribeNetworkInterfacesRequest;
export declare type DescribeNetworkInterfacesCommandOutput = DescribeNetworkInterfacesResult & __MetadataBearer;
export declare class DescribeNetworkInterfacesCommand extends $Command<DescribeNetworkInterfacesCommandInput, DescribeNetworkInterfacesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkInterfacesCommandInput;
    constructor(input: DescribeNetworkInterfacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkInterfacesCommandInput, DescribeNetworkInterfacesCommandOutput>;
    private serialize;
    private deserialize;
}
