import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestApprovalStateInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePullRequestApprovalStateCommandInput = UpdatePullRequestApprovalStateInput;
export declare type UpdatePullRequestApprovalStateCommandOutput = __MetadataBearer;
export declare class UpdatePullRequestApprovalStateCommand extends $Command<UpdatePullRequestApprovalStateCommandInput, UpdatePullRequestApprovalStateCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdatePullRequestApprovalStateCommandInput;
    constructor(input: UpdatePullRequestApprovalStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePullRequestApprovalStateCommandInput, UpdatePullRequestApprovalStateCommandOutput>;
    private serialize;
    private deserialize;
}
