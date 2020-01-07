import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreateCommitInput, CreateCommitOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCommitCommandInput = CreateCommitInput;
export declare type CreateCommitCommandOutput = CreateCommitOutput & __MetadataBearer;
export declare class CreateCommitCommand extends $Command<CreateCommitCommandInput, CreateCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreateCommitCommandInput;
    constructor(input: CreateCommitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCommitCommandInput, CreateCommitCommandOutput>;
    private serialize;
    private deserialize;
}
