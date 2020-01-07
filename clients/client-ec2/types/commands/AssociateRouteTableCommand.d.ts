import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateRouteTableRequest, AssociateRouteTableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateRouteTableCommandInput = AssociateRouteTableRequest;
export declare type AssociateRouteTableCommandOutput = AssociateRouteTableResult & __MetadataBearer;
export declare class AssociateRouteTableCommand extends $Command<AssociateRouteTableCommandInput, AssociateRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateRouteTableCommandInput;
    constructor(input: AssociateRouteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateRouteTableCommandInput, AssociateRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
