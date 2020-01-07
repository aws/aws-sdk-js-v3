import { DirectConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectConnectClient";
import { DescribeDirectConnectGatewayAssociationProposalsRequest, DescribeDirectConnectGatewayAssociationProposalsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDirectConnectGatewayAssociationProposalsCommandInput = DescribeDirectConnectGatewayAssociationProposalsRequest;
export declare type DescribeDirectConnectGatewayAssociationProposalsCommandOutput = DescribeDirectConnectGatewayAssociationProposalsResult & __MetadataBearer;
export declare class DescribeDirectConnectGatewayAssociationProposalsCommand extends $Command<DescribeDirectConnectGatewayAssociationProposalsCommandInput, DescribeDirectConnectGatewayAssociationProposalsCommandOutput, DirectConnectClientResolvedConfig> {
    readonly input: DescribeDirectConnectGatewayAssociationProposalsCommandInput;
    constructor(input: DescribeDirectConnectGatewayAssociationProposalsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectConnectClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDirectConnectGatewayAssociationProposalsCommandInput, DescribeDirectConnectGatewayAssociationProposalsCommandOutput>;
    private serialize;
    private deserialize;
}
