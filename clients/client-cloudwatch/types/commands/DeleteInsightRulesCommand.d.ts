import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteInsightRulesInput, DeleteInsightRulesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteInsightRulesCommandInput = DeleteInsightRulesInput;
export declare type DeleteInsightRulesCommandOutput = DeleteInsightRulesOutput & __MetadataBearer;
export declare class DeleteInsightRulesCommand extends $Command<DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DeleteInsightRulesCommandInput;
    constructor(input: DeleteInsightRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput>;
    private serialize;
    private deserialize;
}
