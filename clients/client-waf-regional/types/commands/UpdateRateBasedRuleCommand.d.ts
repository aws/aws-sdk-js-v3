import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { UpdateRateBasedRuleRequest, UpdateRateBasedRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRateBasedRuleCommandInput = UpdateRateBasedRuleRequest;
export declare type UpdateRateBasedRuleCommandOutput = UpdateRateBasedRuleResponse & __MetadataBearer;
export declare class UpdateRateBasedRuleCommand extends $Command<UpdateRateBasedRuleCommandInput, UpdateRateBasedRuleCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: UpdateRateBasedRuleCommandInput;
    constructor(input: UpdateRateBasedRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRateBasedRuleCommandInput, UpdateRateBasedRuleCommandOutput>;
    private serialize;
    private deserialize;
}
