import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AttachVpnGatewayRequest, AttachVpnGatewayResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachVpnGatewayCommandInput = AttachVpnGatewayRequest;
export declare type AttachVpnGatewayCommandOutput = AttachVpnGatewayResult & __MetadataBearer;
export declare class AttachVpnGatewayCommand extends $Command<AttachVpnGatewayCommandInput, AttachVpnGatewayCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AttachVpnGatewayCommandInput;
    constructor(input: AttachVpnGatewayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachVpnGatewayCommandInput, AttachVpnGatewayCommandOutput>;
    private serialize;
    private deserialize;
}
