import { AccessAnalyzerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AccessAnalyzerClient";
import { GetArchiveRuleRequest, GetArchiveRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetArchiveRuleCommandInput = GetArchiveRuleRequest;
export declare type GetArchiveRuleCommandOutput = GetArchiveRuleResponse & __MetadataBearer;
export declare class GetArchiveRuleCommand extends $Command<GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput, AccessAnalyzerClientResolvedConfig> {
    readonly input: GetArchiveRuleCommandInput;
    constructor(input: GetArchiveRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AccessAnalyzerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetArchiveRuleCommandInput, GetArchiveRuleCommandOutput>;
    private serialize;
    private deserialize;
}
