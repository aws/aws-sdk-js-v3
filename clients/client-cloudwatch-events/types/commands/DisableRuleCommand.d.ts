import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DisableRuleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableRuleCommandInput = DisableRuleRequest;
export declare type DisableRuleCommandOutput = __MetadataBearer;
export declare class DisableRuleCommand extends $Command<DisableRuleCommandInput, DisableRuleCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: DisableRuleCommandInput;
    constructor(input: DisableRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableRuleCommandInput, DisableRuleCommandOutput>;
    private serialize;
    private deserialize;
}
