import { ServiceInputTypes, ServiceOutputTypes, WAFRegionalClientResolvedConfig } from "../WAFRegionalClient";
import { CreateRuleRequest, CreateRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRuleCommandInput = CreateRuleRequest;
export declare type CreateRuleCommandOutput = CreateRuleResponse & __MetadataBearer;
export declare class CreateRuleCommand extends $Command<CreateRuleCommandInput, CreateRuleCommandOutput, WAFRegionalClientResolvedConfig> {
    readonly input: CreateRuleCommandInput;
    constructor(input: CreateRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFRegionalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRuleCommandInput, CreateRuleCommandOutput>;
    private serialize;
    private deserialize;
}
