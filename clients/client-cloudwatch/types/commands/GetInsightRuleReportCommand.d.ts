import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetInsightRuleReportInput, GetInsightRuleReportOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetInsightRuleReportCommandInput = GetInsightRuleReportInput;
export declare type GetInsightRuleReportCommandOutput = GetInsightRuleReportOutput & __MetadataBearer;
export declare class GetInsightRuleReportCommand extends $Command<GetInsightRuleReportCommandInput, GetInsightRuleReportCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: GetInsightRuleReportCommandInput;
    constructor(input: GetInsightRuleReportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetInsightRuleReportCommandInput, GetInsightRuleReportCommandOutput>;
    private serialize;
    private deserialize;
}
