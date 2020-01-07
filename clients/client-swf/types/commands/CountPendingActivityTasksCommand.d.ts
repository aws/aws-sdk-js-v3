import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { CountPendingActivityTasksInput, PendingTaskCount } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CountPendingActivityTasksCommandInput = CountPendingActivityTasksInput;
export declare type CountPendingActivityTasksCommandOutput = PendingTaskCount & __MetadataBearer;
export declare class CountPendingActivityTasksCommand extends $Command<CountPendingActivityTasksCommandInput, CountPendingActivityTasksCommandOutput, SWFClientResolvedConfig> {
    readonly input: CountPendingActivityTasksCommandInput;
    constructor(input: CountPendingActivityTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CountPendingActivityTasksCommandInput, CountPendingActivityTasksCommandOutput>;
    private serialize;
    private deserialize;
}
