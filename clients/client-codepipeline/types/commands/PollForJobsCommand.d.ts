import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PollForJobsInput, PollForJobsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PollForJobsCommandInput = PollForJobsInput;
export declare type PollForJobsCommandOutput = PollForJobsOutput & __MetadataBearer;
export declare class PollForJobsCommand extends $Command<PollForJobsCommandInput, PollForJobsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PollForJobsCommandInput;
    constructor(input: PollForJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PollForJobsCommandInput, PollForJobsCommandOutput>;
    private serialize;
    private deserialize;
}
