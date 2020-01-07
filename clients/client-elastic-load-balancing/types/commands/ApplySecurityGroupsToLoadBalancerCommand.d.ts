import { ElasticLoadBalancingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingClient";
import { ApplySecurityGroupsToLoadBalancerInput, ApplySecurityGroupsToLoadBalancerOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ApplySecurityGroupsToLoadBalancerCommandInput = ApplySecurityGroupsToLoadBalancerInput;
export declare type ApplySecurityGroupsToLoadBalancerCommandOutput = ApplySecurityGroupsToLoadBalancerOutput & __MetadataBearer;
export declare class ApplySecurityGroupsToLoadBalancerCommand extends $Command<ApplySecurityGroupsToLoadBalancerCommandInput, ApplySecurityGroupsToLoadBalancerCommandOutput, ElasticLoadBalancingClientResolvedConfig> {
    readonly input: ApplySecurityGroupsToLoadBalancerCommandInput;
    constructor(input: ApplySecurityGroupsToLoadBalancerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ApplySecurityGroupsToLoadBalancerCommandInput, ApplySecurityGroupsToLoadBalancerCommandOutput>;
    private serialize;
    private deserialize;
}
