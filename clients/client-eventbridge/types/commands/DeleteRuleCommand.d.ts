import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeleteRuleRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteRuleCommandInput = DeleteRuleRequest;
export declare type DeleteRuleCommandOutput = __MetadataBearer;
export declare class DeleteRuleCommand extends $Command<DeleteRuleCommandInput, DeleteRuleCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DeleteRuleCommandInput;
    constructor(input: DeleteRuleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRuleCommandInput, DeleteRuleCommandOutput>;
    private serialize;
    private deserialize;
}
