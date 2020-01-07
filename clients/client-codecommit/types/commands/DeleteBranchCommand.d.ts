import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteBranchInput, DeleteBranchOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteBranchCommandInput = DeleteBranchInput;
export declare type DeleteBranchCommandOutput = DeleteBranchOutput & __MetadataBearer;
export declare class DeleteBranchCommand extends $Command<DeleteBranchCommandInput, DeleteBranchCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteBranchCommandInput;
    constructor(input: DeleteBranchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteBranchCommandInput, DeleteBranchCommandOutput>;
    private serialize;
    private deserialize;
}
