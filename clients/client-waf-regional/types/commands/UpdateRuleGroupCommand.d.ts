import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateRuleGroupRequest, UpdateRuleGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRuleGroupCommandInput = UpdateRuleGroupRequest;
export declare type UpdateRuleGroupCommandOutput = UpdateRuleGroupResponse & __MetadataBearer;
export declare class UpdateRuleGroupCommand extends $Command<UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: UpdateRuleGroupCommandInput;
    constructor(input: UpdateRuleGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput>;
    private serialize;
    private deserialize;
}
