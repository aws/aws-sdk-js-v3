import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetRepositoryInput, GetRepositoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRepositoryCommandInput = GetRepositoryInput;
export declare type GetRepositoryCommandOutput = GetRepositoryOutput & __MetadataBearer;
export declare class GetRepositoryCommand extends $Command<GetRepositoryCommandInput, GetRepositoryCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetRepositoryCommandInput;
    constructor(input: GetRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRepositoryCommandInput, GetRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
