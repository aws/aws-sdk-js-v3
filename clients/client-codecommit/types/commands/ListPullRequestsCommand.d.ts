import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { ListPullRequestsInput, ListPullRequestsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPullRequestsCommandInput = ListPullRequestsInput;
export declare type ListPullRequestsCommandOutput = ListPullRequestsOutput & __MetadataBearer;
export declare class ListPullRequestsCommand extends $Command<ListPullRequestsCommandInput, ListPullRequestsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: ListPullRequestsCommandInput;
    constructor(input: ListPullRequestsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPullRequestsCommandInput, ListPullRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
