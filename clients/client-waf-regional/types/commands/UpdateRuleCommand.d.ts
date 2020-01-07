import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateRuleRequest, UpdateRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRuleCommandInput = UpdateRuleRequest;
export declare type UpdateRuleCommandOutput = UpdateRuleResponse & __MetadataBearer;
export declare class UpdateRuleCommand extends $Command<UpdateRuleCommandInput, UpdateRuleCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: UpdateRuleCommandInput;
    constructor(input: UpdateRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRuleCommandInput, UpdateRuleCommandOutput>;
    private serialize;
    private deserialize;
}
