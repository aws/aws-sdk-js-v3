import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateClientVpnTargetNetworkRequest, AssociateClientVpnTargetNetworkResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateClientVpnTargetNetworkCommandInput = AssociateClientVpnTargetNetworkRequest;
export declare type AssociateClientVpnTargetNetworkCommandOutput = AssociateClientVpnTargetNetworkResult & __MetadataBearer;
export declare class AssociateClientVpnTargetNetworkCommand extends $Command<AssociateClientVpnTargetNetworkCommandInput, AssociateClientVpnTargetNetworkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateClientVpnTargetNetworkCommandInput;
    constructor(input: AssociateClientVpnTargetNetworkCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateClientVpnTargetNetworkCommandInput, AssociateClientVpnTargetNetworkCommandOutput>;
    private serialize;
    private deserialize;
}
