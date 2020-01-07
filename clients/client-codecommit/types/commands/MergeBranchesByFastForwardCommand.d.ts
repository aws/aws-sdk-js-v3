import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergeBranchesByFastForwardInput, MergeBranchesByFastForwardOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MergeBranchesByFastForwardCommandInput = MergeBranchesByFastForwardInput;
export declare type MergeBranchesByFastForwardCommandOutput = MergeBranchesByFastForwardOutput & __MetadataBearer;
export declare class MergeBranchesByFastForwardCommand extends $Command<MergeBranchesByFastForwardCommandInput, MergeBranchesByFastForwardCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergeBranchesByFastForwardCommandInput;
    constructor(input: MergeBranchesByFastForwardCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergeBranchesByFastForwardCommandInput, MergeBranchesByFastForwardCommandOutput>;
    private serialize;
    private deserialize;
}
