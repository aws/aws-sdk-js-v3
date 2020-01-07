import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutInsightRuleInput, PutInsightRuleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutInsightRuleCommandInput = PutInsightRuleInput;
export declare type PutInsightRuleCommandOutput = PutInsightRuleOutput & __MetadataBearer;
export declare class PutInsightRuleCommand extends $Command<PutInsightRuleCommandInput, PutInsightRuleCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: PutInsightRuleCommandInput;
    constructor(input: PutInsightRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutInsightRuleCommandInput, PutInsightRuleCommandOutput>;
    private serialize;
    private deserialize;
}
