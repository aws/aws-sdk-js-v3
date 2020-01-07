import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DetachVpnGatewayRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DetachVpnGatewayCommandInput = DetachVpnGatewayRequest;
export declare type DetachVpnGatewayCommandOutput = __MetadataBearer;
export declare class DetachVpnGatewayCommand extends $Command<DetachVpnGatewayCommandInput, DetachVpnGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DetachVpnGatewayCommandInput;
    constructor(input: DetachVpnGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetachVpnGatewayCommandInput, DetachVpnGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
