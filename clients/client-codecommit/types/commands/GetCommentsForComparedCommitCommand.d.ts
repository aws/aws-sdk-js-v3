import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentsForComparedCommitInput, GetCommentsForComparedCommitOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCommentsForComparedCommitCommandInput = GetCommentsForComparedCommitInput;
export declare type GetCommentsForComparedCommitCommandOutput = GetCommentsForComparedCommitOutput & __MetadataBearer;
export declare class GetCommentsForComparedCommitCommand extends $Command<GetCommentsForComparedCommitCommandInput, GetCommentsForComparedCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetCommentsForComparedCommitCommandInput;
    constructor(input: GetCommentsForComparedCommitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommentsForComparedCommitCommandInput, GetCommentsForComparedCommitCommandOutput>;
    private serialize;
    private deserialize;
}
