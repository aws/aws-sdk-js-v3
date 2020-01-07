import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommitInput, GetCommitOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCommitCommandInput = GetCommitInput;
export declare type GetCommitCommandOutput = GetCommitOutput & __MetadataBearer;
export declare class GetCommitCommand extends $Command<GetCommitCommandInput, GetCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetCommitCommandInput;
    constructor(input: GetCommitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCommitCommandInput, GetCommitCommandOutput>;
    private serialize;
    private deserialize;
}
