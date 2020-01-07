import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateLocalGatewayRouteTableVpcAssociationRequest, CreateLocalGatewayRouteTableVpcAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateLocalGatewayRouteTableVpcAssociationCommandInput = CreateLocalGatewayRouteTableVpcAssociationRequest;
export declare type CreateLocalGatewayRouteTableVpcAssociationCommandOutput = CreateLocalGatewayRouteTableVpcAssociationResult & __MetadataBearer;
export declare class CreateLocalGatewayRouteTableVpcAssociationCommand extends $Command<CreateLocalGatewayRouteTableVpcAssociationCommandInput, CreateLocalGatewayRouteTableVpcAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateLocalGatewayRouteTableVpcAssociationCommandInput;
    constructor(input: CreateLocalGatewayRouteTableVpcAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLocalGatewayRouteTableVpcAssociationCommandInput, CreateLocalGatewayRouteTableVpcAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
