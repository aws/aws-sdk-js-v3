import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { UpdateSecurityGroupRuleDescriptionsEgressRequest, UpdateSecurityGroupRuleDescriptionsEgressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateSecurityGroupRuleDescriptionsEgressCommandInput = UpdateSecurityGroupRuleDescriptionsEgressRequest;
export declare type UpdateSecurityGroupRuleDescriptionsEgressCommandOutput = UpdateSecurityGroupRuleDescriptionsEgressResult & __MetadataBearer;
export declare class UpdateSecurityGroupRuleDescriptionsEgressCommand extends $Command<UpdateSecurityGroupRuleDescriptionsEgressCommandInput, UpdateSecurityGroupRuleDescriptionsEgressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput;
    constructor(input: UpdateSecurityGroupRuleDescriptionsEgressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateSecurityGroupRuleDescriptionsEgressCommandInput, UpdateSecurityGroupRuleDescriptionsEgressCommandOutput>;
    private serialize;
    private deserialize;
}
