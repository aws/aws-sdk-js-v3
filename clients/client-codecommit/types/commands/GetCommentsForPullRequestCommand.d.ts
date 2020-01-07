import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentsForPullRequestInput, GetCommentsForPullRequestOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCommentsForPullRequestCommandInput = GetCommentsForPullRequestInput;
export declare type GetCommentsForPullRequestCommandOutput = GetCommentsForPullRequestOutput & __MetadataBearer;
export declare class GetCommentsForPullRequestCommand extends $Command<GetCommentsForPullRequestCommandInput, GetCommentsForPullRequestCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetCommentsForPullRequestCommandInput;
    constructor(input: GetCommentsForPullRequestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommentsForPullRequestCommandInput, GetCommentsForPullRequestCommandOutput>;
    private serialize;
    private deserialize;
}
