import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeNetworkInterfacePermissionsRequest, DescribeNetworkInterfacePermissionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNetworkInterfacePermissionsCommandInput = DescribeNetworkInterfacePermissionsRequest;
export declare type DescribeNetworkInterfacePermissionsCommandOutput = DescribeNetworkInterfacePermissionsResult & __MetadataBearer;
export declare class DescribeNetworkInterfacePermissionsCommand extends $Command<DescribeNetworkInterfacePermissionsCommandInput, DescribeNetworkInterfacePermissionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeNetworkInterfacePermissionsCommandInput;
    constructor(input: DescribeNetworkInterfacePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNetworkInterfacePermissionsCommandInput, DescribeNetworkInterfacePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
