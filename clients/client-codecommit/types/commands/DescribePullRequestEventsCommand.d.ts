import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DescribePullRequestEventsInput, DescribePullRequestEventsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePullRequestEventsCommandInput = DescribePullRequestEventsInput;
export declare type DescribePullRequestEventsCommandOutput = DescribePullRequestEventsOutput & __MetadataBearer;
export declare class DescribePullRequestEventsCommand extends $Command<DescribePullRequestEventsCommandInput, DescribePullRequestEventsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DescribePullRequestEventsCommandInput;
    constructor(input: DescribePullRequestEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePullRequestEventsCommandInput, DescribePullRequestEventsCommandOutput>;
    private serialize;
    private deserialize;
}
