import { ElasticLoadBalancingv2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticLoadBalancingv2Client";
import { SetSecurityGroupsInput, SetSecurityGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetSecurityGroupsCommandInput = SetSecurityGroupsInput;
export declare type SetSecurityGroupsCommandOutput = SetSecurityGroupsOutput & __MetadataBearer;
export declare class SetSecurityGroupsCommand extends $Command<SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput, ElasticLoadBalancingv2ClientResolvedConfig> {
    readonly input: SetSecurityGroupsCommandInput;
    constructor(input: SetSecurityGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElasticLoadBalancingv2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetSecurityGroupsCommandInput, SetSecurityGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
