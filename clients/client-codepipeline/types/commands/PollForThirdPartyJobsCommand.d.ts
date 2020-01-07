import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PollForThirdPartyJobsInput, PollForThirdPartyJobsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PollForThirdPartyJobsCommandInput = PollForThirdPartyJobsInput;
export declare type PollForThirdPartyJobsCommandOutput = PollForThirdPartyJobsOutput & __MetadataBearer;
export declare class PollForThirdPartyJobsCommand extends $Command<PollForThirdPartyJobsCommandInput, PollForThirdPartyJobsCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: PollForThirdPartyJobsCommandInput;
    constructor(input: PollForThirdPartyJobsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PollForThirdPartyJobsCommandInput, PollForThirdPartyJobsCommandOutput>;
    private serialize;
    private deserialize;
}
