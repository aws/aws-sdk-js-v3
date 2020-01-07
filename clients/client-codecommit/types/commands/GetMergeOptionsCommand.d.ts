import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetMergeOptionsInput, GetMergeOptionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMergeOptionsCommandInput = GetMergeOptionsInput;
export declare type GetMergeOptionsCommandOutput = GetMergeOptionsOutput & __MetadataBearer;
export declare class GetMergeOptionsCommand extends $Command<GetMergeOptionsCommandInput, GetMergeOptionsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetMergeOptionsCommandInput;
    constructor(input: GetMergeOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMergeOptionsCommandInput, GetMergeOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
