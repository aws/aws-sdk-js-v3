import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeDirectConnectGatewaysRequest, DescribeDirectConnectGatewaysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDirectConnectGatewaysCommandInput = DescribeDirectConnectGatewaysRequest;
export declare type DescribeDirectConnectGatewaysCommandOutput = DescribeDirectConnectGatewaysResult & __MetadataBearer;
export declare class DescribeDirectConnectGatewaysCommand extends $Command<DescribeDirectConnectGatewaysCommandInput, DescribeDirectConnectGatewaysCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeDirectConnectGatewaysCommandInput;
    constructor(input: DescribeDirectConnectGatewaysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDirectConnectGatewaysCommandInput, DescribeDirectConnectGatewaysCommandOutput>;
    private serialize;
    private deserialize;
}
