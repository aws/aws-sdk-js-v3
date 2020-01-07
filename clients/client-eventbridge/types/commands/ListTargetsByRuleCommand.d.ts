import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { ListTargetsByRuleRequest, ListTargetsByRuleResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTargetsByRuleCommandInput = ListTargetsByRuleRequest;
export declare type ListTargetsByRuleCommandOutput = ListTargetsByRuleResponse & __MetadataBearer;
export declare class ListTargetsByRuleCommand extends $Command<ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: ListTargetsByRuleCommandInput;
    constructor(input: ListTargetsByRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput>;
    private serialize;
    private deserialize;
}
