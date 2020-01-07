import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetPullRequestInput, GetPullRequestOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPullRequestCommandInput = GetPullRequestInput;
export declare type GetPullRequestCommandOutput = GetPullRequestOutput & __MetadataBearer;
export declare class GetPullRequestCommand extends $Command<GetPullRequestCommandInput, GetPullRequestCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetPullRequestCommandInput;
    constructor(input: GetPullRequestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPullRequestCommandInput, GetPullRequestCommandOutput>;
    private serialize;
    private deserialize;
}
