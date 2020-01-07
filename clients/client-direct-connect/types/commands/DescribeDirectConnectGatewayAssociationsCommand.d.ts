import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeDirectConnectGatewayAssociationsRequest, DescribeDirectConnectGatewayAssociationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDirectConnectGatewayAssociationsCommandInput = DescribeDirectConnectGatewayAssociationsRequest;
export declare type DescribeDirectConnectGatewayAssociationsCommandOutput = DescribeDirectConnectGatewayAssociationsResult & __MetadataBearer;
export declare class DescribeDirectConnectGatewayAssociationsCommand extends $Command<DescribeDirectConnectGatewayAssociationsCommandInput, DescribeDirectConnectGatewayAssociationsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeDirectConnectGatewayAssociationsCommandInput;
    constructor(input: DescribeDirectConnectGatewayAssociationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDirectConnectGatewayAssociationsCommandInput, DescribeDirectConnectGatewayAssociationsCommandOutput>;
    private serialize;
    private deserialize;
}
