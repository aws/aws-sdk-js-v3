import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DeleteRuleGroupRequest, DeleteRuleGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRuleGroupCommandInput = DeleteRuleGroupRequest;
export declare type DeleteRuleGroupCommandOutput = DeleteRuleGroupResponse & __MetadataBearer;
export declare class DeleteRuleGroupCommand extends $Command<DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DeleteRuleGroupCommandInput;
    constructor(input: DeleteRuleGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
