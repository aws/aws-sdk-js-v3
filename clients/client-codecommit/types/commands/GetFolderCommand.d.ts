import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetFolderInput, GetFolderOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFolderCommandInput = GetFolderInput;
export declare type GetFolderCommandOutput = GetFolderOutput & __MetadataBearer;
export declare class GetFolderCommand extends $Command<GetFolderCommandInput, GetFolderCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetFolderCommandInput;
    constructor(input: GetFolderCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFolderCommandInput, GetFolderCommandOutput>;
    private serialize;
    private deserialize;
}
