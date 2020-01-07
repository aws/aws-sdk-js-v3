import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergeBranchesBySquashInput, MergeBranchesBySquashOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MergeBranchesBySquashCommandInput = MergeBranchesBySquashInput;
export declare type MergeBranchesBySquashCommandOutput = MergeBranchesBySquashOutput & __MetadataBearer;
export declare class MergeBranchesBySquashCommand extends $Command<MergeBranchesBySquashCommandInput, MergeBranchesBySquashCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergeBranchesBySquashCommandInput;
    constructor(input: MergeBranchesBySquashCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergeBranchesBySquashCommandInput, MergeBranchesBySquashCommandOutput>;
    private serialize;
    private deserialize;
}
