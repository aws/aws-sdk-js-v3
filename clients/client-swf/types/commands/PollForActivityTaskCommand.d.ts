import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { ActivityTask, PollForActivityTaskInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PollForActivityTaskCommandInput = PollForActivityTaskInput;
export declare type PollForActivityTaskCommandOutput = ActivityTask & __MetadataBearer;
export declare class PollForActivityTaskCommand extends $Command<PollForActivityTaskCommandInput, PollForActivityTaskCommandOutput, SWFClientResolvedConfig> {
    readonly input: PollForActivityTaskCommandInput;
    constructor(input: PollForActivityTaskCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PollForActivityTaskCommandInput, PollForActivityTaskCommandOutput>;
    private serialize;
    private deserialize;
}
