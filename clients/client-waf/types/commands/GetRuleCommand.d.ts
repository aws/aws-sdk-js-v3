import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { GetRuleRequest, GetRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRuleCommandInput = GetRuleRequest;
export declare type GetRuleCommandOutput = GetRuleResponse & __MetadataBearer;
export declare class GetRuleCommand extends $Command<GetRuleCommandInput, GetRuleCommandOutput, WAFClientResolvedConfig> {
    readonly input: GetRuleCommandInput;
    constructor(input: GetRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRuleCommandInput, GetRuleCommandOutput>;
    private serialize;
    private deserialize;
}
