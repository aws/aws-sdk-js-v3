import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { EnableRuleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableRuleCommandInput = EnableRuleRequest;
export declare type EnableRuleCommandOutput = __MetadataBearer;
export declare class EnableRuleCommand extends $Command<EnableRuleCommandInput, EnableRuleCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: EnableRuleCommandInput;
    constructor(input: EnableRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableRuleCommandInput, EnableRuleCommandOutput>;
    private serialize;
    private deserialize;
}
