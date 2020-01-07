import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { PutRuleRequest, PutRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRuleCommandInput = PutRuleRequest;
export declare type PutRuleCommandOutput = PutRuleResponse & __MetadataBearer;
export declare class PutRuleCommand extends $Command<PutRuleCommandInput, PutRuleCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: PutRuleCommandInput;
    constructor(input: PutRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRuleCommandInput, PutRuleCommandOutput>;
    private serialize;
    private deserialize;
}
