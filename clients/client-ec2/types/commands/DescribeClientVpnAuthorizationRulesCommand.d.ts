import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribeClientVpnAuthorizationRulesRequest, DescribeClientVpnAuthorizationRulesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeClientVpnAuthorizationRulesCommandInput = DescribeClientVpnAuthorizationRulesRequest;
export declare type DescribeClientVpnAuthorizationRulesCommandOutput = DescribeClientVpnAuthorizationRulesResult & __MetadataBearer;
export declare class DescribeClientVpnAuthorizationRulesCommand extends $Command<DescribeClientVpnAuthorizationRulesCommandInput, DescribeClientVpnAuthorizationRulesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribeClientVpnAuthorizationRulesCommandInput;
    constructor(input: DescribeClientVpnAuthorizationRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeClientVpnAuthorizationRulesCommandInput, DescribeClientVpnAuthorizationRulesCommandOutput>;
    private serialize;
    private deserialize;
}
