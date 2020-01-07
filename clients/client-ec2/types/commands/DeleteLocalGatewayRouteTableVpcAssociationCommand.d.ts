import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteLocalGatewayRouteTableVpcAssociationRequest, DeleteLocalGatewayRouteTableVpcAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteLocalGatewayRouteTableVpcAssociationCommandInput = DeleteLocalGatewayRouteTableVpcAssociationRequest;
export declare type DeleteLocalGatewayRouteTableVpcAssociationCommandOutput = DeleteLocalGatewayRouteTableVpcAssociationResult & __MetadataBearer;
export declare class DeleteLocalGatewayRouteTableVpcAssociationCommand extends $Command<DeleteLocalGatewayRouteTableVpcAssociationCommandInput, DeleteLocalGatewayRouteTableVpcAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteLocalGatewayRouteTableVpcAssociationCommandInput;
    constructor(input: DeleteLocalGatewayRouteTableVpcAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLocalGatewayRouteTableVpcAssociationCommandInput, DeleteLocalGatewayRouteTableVpcAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
