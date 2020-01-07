import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DisableInsightRulesInput, DisableInsightRulesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableInsightRulesCommandInput = DisableInsightRulesInput;
export declare type DisableInsightRulesCommandOutput = DisableInsightRulesOutput & __MetadataBearer;
export declare class DisableInsightRulesCommand extends $Command<DisableInsightRulesCommandInput, DisableInsightRulesCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DisableInsightRulesCommandInput;
    constructor(input: DisableInsightRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableInsightRulesCommandInput, DisableInsightRulesCommandOutput>;
    private serialize;
    private deserialize;
}
