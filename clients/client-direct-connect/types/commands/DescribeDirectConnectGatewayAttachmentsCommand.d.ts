import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeDirectConnectGatewayAttachmentsRequest, DescribeDirectConnectGatewayAttachmentsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDirectConnectGatewayAttachmentsCommandInput = DescribeDirectConnectGatewayAttachmentsRequest;
export declare type DescribeDirectConnectGatewayAttachmentsCommandOutput = DescribeDirectConnectGatewayAttachmentsResult & __MetadataBearer;
export declare class DescribeDirectConnectGatewayAttachmentsCommand extends $Command<DescribeDirectConnectGatewayAttachmentsCommandInput, DescribeDirectConnectGatewayAttachmentsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeDirectConnectGatewayAttachmentsCommandInput;
    constructor(input: DescribeDirectConnectGatewayAttachmentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDirectConnectGatewayAttachmentsCommandInput, DescribeDirectConnectGatewayAttachmentsCommandOutput>;
    private serialize;
    private deserialize;
}
