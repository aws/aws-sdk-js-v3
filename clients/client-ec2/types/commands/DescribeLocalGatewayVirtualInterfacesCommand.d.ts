import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeLocalGatewayVirtualInterfacesRequest, DescribeLocalGatewayVirtualInterfacesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeLocalGatewayVirtualInterfacesCommandInput = DescribeLocalGatewayVirtualInterfacesRequest;
export declare type DescribeLocalGatewayVirtualInterfacesCommandOutput = DescribeLocalGatewayVirtualInterfacesResult & __MetadataBearer;
export declare class DescribeLocalGatewayVirtualInterfacesCommand extends $Command<DescribeLocalGatewayVirtualInterfacesCommandInput, DescribeLocalGatewayVirtualInterfacesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeLocalGatewayVirtualInterfacesCommandInput;
    constructor(input: DescribeLocalGatewayVirtualInterfacesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeLocalGatewayVirtualInterfacesCommandInput, DescribeLocalGatewayVirtualInterfacesCommandOutput>;
    private serialize;
    private deserialize;
}
