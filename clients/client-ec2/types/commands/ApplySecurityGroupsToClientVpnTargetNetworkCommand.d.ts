import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ApplySecurityGroupsToClientVpnTargetNetworkRequest, ApplySecurityGroupsToClientVpnTargetNetworkResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ApplySecurityGroupsToClientVpnTargetNetworkCommandInput = ApplySecurityGroupsToClientVpnTargetNetworkRequest;
export declare type ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput = ApplySecurityGroupsToClientVpnTargetNetworkResult & __MetadataBearer;
export declare class ApplySecurityGroupsToClientVpnTargetNetworkCommand extends $Command<ApplySecurityGroupsToClientVpnTargetNetworkCommandInput, ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput;
    constructor(input: ApplySecurityGroupsToClientVpnTargetNetworkCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ApplySecurityGroupsToClientVpnTargetNetworkCommandInput, ApplySecurityGroupsToClientVpnTargetNetworkCommandOutput>;
    private serialize;
    private deserialize;
}
