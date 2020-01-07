import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { DecisionTask, PollForDecisionTaskInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PollForDecisionTaskCommandInput = PollForDecisionTaskInput;
export declare type PollForDecisionTaskCommandOutput = DecisionTask & __MetadataBearer;
export declare class PollForDecisionTaskCommand extends $Command<PollForDecisionTaskCommandInput, PollForDecisionTaskCommandOutput, SWFClientResolvedConfig> {
    readonly input: PollForDecisionTaskCommandInput;
    constructor(input: PollForDecisionTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PollForDecisionTaskCommandInput, PollForDecisionTaskCommandOutput>;
    private serialize;
    private deserialize;
}
