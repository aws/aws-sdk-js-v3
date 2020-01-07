import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreateRepositoryInput, CreateRepositoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateRepositoryCommandInput = CreateRepositoryInput;
export declare type CreateRepositoryCommandOutput = CreateRepositoryOutput & __MetadataBearer;
export declare class CreateRepositoryCommand extends $Command<CreateRepositoryCommandInput, CreateRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreateRepositoryCommandInput;
    constructor(input: CreateRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRepositoryCommandInput, CreateRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
