import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetPullRequestApprovalStatesInput, GetPullRequestApprovalStatesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPullRequestApprovalStatesCommandInput = GetPullRequestApprovalStatesInput;
export declare type GetPullRequestApprovalStatesCommandOutput = GetPullRequestApprovalStatesOutput & __MetadataBearer;
export declare class GetPullRequestApprovalStatesCommand extends $Command<GetPullRequestApprovalStatesCommandInput, GetPullRequestApprovalStatesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetPullRequestApprovalStatesCommandInput;
    constructor(input: GetPullRequestApprovalStatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPullRequestApprovalStatesCommandInput, GetPullRequestApprovalStatesCommandOutput>;
    private serialize;
    private deserialize;
}
