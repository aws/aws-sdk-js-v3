import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateRateBasedRuleRequest, CreateRateBasedRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRateBasedRuleCommandInput = CreateRateBasedRuleRequest;
export declare type CreateRateBasedRuleCommandOutput = CreateRateBasedRuleResponse & __MetadataBearer;
export declare class CreateRateBasedRuleCommand extends $Command<CreateRateBasedRuleCommandInput, CreateRateBasedRuleCommandOutput, WAFClientResolvedConfig> {
    readonly input: CreateRateBasedRuleCommandInput;
    constructor(input: CreateRateBasedRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRateBasedRuleCommandInput, CreateRateBasedRuleCommandOutput>;
    private serialize;
    private deserialize;
}
