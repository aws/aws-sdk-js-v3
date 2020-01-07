import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { MergeBranchesByThreeWayInput, MergeBranchesByThreeWayOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MergeBranchesByThreeWayCommandInput = MergeBranchesByThreeWayInput;
export declare type MergeBranchesByThreeWayCommandOutput = MergeBranchesByThreeWayOutput & __MetadataBearer;
export declare class MergeBranchesByThreeWayCommand extends $Command<MergeBranchesByThreeWayCommandInput, MergeBranchesByThreeWayCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: MergeBranchesByThreeWayCommandInput;
    constructor(input: MergeBranchesByThreeWayCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergeBranchesByThreeWayCommandInput, MergeBranchesByThreeWayCommandOutput>;
    private serialize;
    private deserialize;
}
