import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { CountPendingDecisionTasksInput, PendingTaskCount } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CountPendingDecisionTasksCommandInput = CountPendingDecisionTasksInput;
export declare type CountPendingDecisionTasksCommandOutput = PendingTaskCount & __MetadataBearer;
export declare class CountPendingDecisionTasksCommand extends $Command<CountPendingDecisionTasksCommandInput, CountPendingDecisionTasksCommandOutput, SWFClientResolvedConfig> {
    readonly input: CountPendingDecisionTasksCommandInput;
    constructor(input: CountPendingDecisionTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CountPendingDecisionTasksCommandInput, CountPendingDecisionTasksCommandOutput>;
    private serialize;
    private deserialize;
}
