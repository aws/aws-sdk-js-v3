import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetFileInput, GetFileOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFileCommandInput = GetFileInput;
export declare type GetFileCommandOutput = GetFileOutput & __MetadataBearer;
export declare class GetFileCommand extends $Command<GetFileCommandInput, GetFileCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetFileCommandInput;
    constructor(input: GetFileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFileCommandInput, GetFileCommandOutput>;
    private serialize;
    private deserialize;
}
