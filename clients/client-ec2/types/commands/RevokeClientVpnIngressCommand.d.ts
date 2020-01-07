import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RevokeClientVpnIngressRequest, RevokeClientVpnIngressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RevokeClientVpnIngressCommandInput = RevokeClientVpnIngressRequest;
export declare type RevokeClientVpnIngressCommandOutput = RevokeClientVpnIngressResult & __MetadataBearer;
export declare class RevokeClientVpnIngressCommand extends $Command<RevokeClientVpnIngressCommandInput, RevokeClientVpnIngressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RevokeClientVpnIngressCommandInput;
    constructor(input: RevokeClientVpnIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeClientVpnIngressCommandInput, RevokeClientVpnIngressCommandOutput>;
    private serialize;
    private deserialize;
}
