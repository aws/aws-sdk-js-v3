import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { EnableInsightRulesInput, EnableInsightRulesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableInsightRulesCommandInput = EnableInsightRulesInput;
export declare type EnableInsightRulesCommandOutput = EnableInsightRulesOutput & __MetadataBearer;
export declare class EnableInsightRulesCommand extends $Command<EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: EnableInsightRulesCommandInput;
    constructor(input: EnableInsightRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput>;
    private serialize;
    private deserialize;
}
