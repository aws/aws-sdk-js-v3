import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DisableAlarmActionsInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableAlarmActionsCommandInput = DisableAlarmActionsInput;
export declare type DisableAlarmActionsCommandOutput = __MetadataBearer;
export declare class DisableAlarmActionsCommand extends $Command<DisableAlarmActionsCommandInput, DisableAlarmActionsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DisableAlarmActionsCommandInput;
    constructor(input: DisableAlarmActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableAlarmActionsCommandInput, DisableAlarmActionsCommandOutput>;
    private serialize;
    private deserialize;
}
