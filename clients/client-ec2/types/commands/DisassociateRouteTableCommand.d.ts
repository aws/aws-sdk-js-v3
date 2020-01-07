import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateRouteTableRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateRouteTableCommandInput = DisassociateRouteTableRequest;
export declare type DisassociateRouteTableCommandOutput = __MetadataBearer;
export declare class DisassociateRouteTableCommand extends $Command<DisassociateRouteTableCommandInput, DisassociateRouteTableCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateRouteTableCommandInput;
    constructor(input: DisassociateRouteTableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateRouteTableCommandInput, DisassociateRouteTableCommandOutput>;
    private serialize;
    private deserialize;
}
