import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteRepositoryInput, DeleteRepositoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRepositoryCommandInput = DeleteRepositoryInput;
export declare type DeleteRepositoryCommandOutput = DeleteRepositoryOutput & __MetadataBearer;
export declare class DeleteRepositoryCommand extends $Command<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DeleteRepositoryCommandInput;
    constructor(input: DeleteRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
