import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreateUnreferencedMergeCommitInput, CreateUnreferencedMergeCommitOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUnreferencedMergeCommitCommandInput = CreateUnreferencedMergeCommitInput;
export declare type CreateUnreferencedMergeCommitCommandOutput = CreateUnreferencedMergeCommitOutput & __MetadataBearer;
export declare class CreateUnreferencedMergeCommitCommand extends $Command<CreateUnreferencedMergeCommitCommandInput, CreateUnreferencedMergeCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreateUnreferencedMergeCommitCommandInput;
    constructor(input: CreateUnreferencedMergeCommitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUnreferencedMergeCommitCommandInput, CreateUnreferencedMergeCommitCommandOutput>;
    private serialize;
    private deserialize;
}
