import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UpdateSecurityGroupRuleDescriptionsIngressRequest, UpdateSecurityGroupRuleDescriptionsIngressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSecurityGroupRuleDescriptionsIngressCommandInput = UpdateSecurityGroupRuleDescriptionsIngressRequest;
export declare type UpdateSecurityGroupRuleDescriptionsIngressCommandOutput = UpdateSecurityGroupRuleDescriptionsIngressResult & __MetadataBearer;
export declare class UpdateSecurityGroupRuleDescriptionsIngressCommand extends $Command<UpdateSecurityGroupRuleDescriptionsIngressCommandInput, UpdateSecurityGroupRuleDescriptionsIngressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput;
    constructor(input: UpdateSecurityGroupRuleDescriptionsIngressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSecurityGroupRuleDescriptionsIngressCommandInput, UpdateSecurityGroupRuleDescriptionsIngressCommandOutput>;
    private serialize;
    private deserialize;
}
