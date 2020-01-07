import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateClientVpnTargetNetworkRequest, DisassociateClientVpnTargetNetworkResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateClientVpnTargetNetworkCommandInput = DisassociateClientVpnTargetNetworkRequest;
export declare type DisassociateClientVpnTargetNetworkCommandOutput = DisassociateClientVpnTargetNetworkResult & __MetadataBearer;
export declare class DisassociateClientVpnTargetNetworkCommand extends $Command<DisassociateClientVpnTargetNetworkCommandInput, DisassociateClientVpnTargetNetworkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateClientVpnTargetNetworkCommandInput;
    constructor(input: DisassociateClientVpnTargetNetworkCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateClientVpnTargetNetworkCommandInput, DisassociateClientVpnTargetNetworkCommandOutput>;
    private serialize;
    private deserialize;
}
