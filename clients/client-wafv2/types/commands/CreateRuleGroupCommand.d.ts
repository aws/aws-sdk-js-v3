import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { CreateRuleGroupRequest, CreateRuleGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRuleGroupCommandInput = CreateRuleGroupRequest;
export declare type CreateRuleGroupCommandOutput = CreateRuleGroupResponse & __MetadataBearer;
export declare class CreateRuleGroupCommand extends $Command<CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: CreateRuleGroupCommandInput;
    constructor(input: CreateRuleGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
