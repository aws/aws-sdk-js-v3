import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReplaceRouteTableAssociationRequest, ReplaceRouteTableAssociationResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReplaceRouteTableAssociationCommandInput = ReplaceRouteTableAssociationRequest;
export declare type ReplaceRouteTableAssociationCommandOutput = ReplaceRouteTableAssociationResult & __MetadataBearer;
export declare class ReplaceRouteTableAssociationCommand extends $Command<ReplaceRouteTableAssociationCommandInput, ReplaceRouteTableAssociationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReplaceRouteTableAssociationCommandInput;
    constructor(input: ReplaceRouteTableAssociationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReplaceRouteTableAssociationCommandInput, ReplaceRouteTableAssociationCommandOutput>;
    private serialize;
    private deserialize;
}
