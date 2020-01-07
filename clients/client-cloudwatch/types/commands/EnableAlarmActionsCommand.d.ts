import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { EnableAlarmActionsInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableAlarmActionsCommandInput = EnableAlarmActionsInput;
export declare type EnableAlarmActionsCommandOutput = __MetadataBearer;
export declare class EnableAlarmActionsCommand extends $Command<EnableAlarmActionsCommandInput, EnableAlarmActionsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: EnableAlarmActionsCommandInput;
    constructor(input: EnableAlarmActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableAlarmActionsCommandInput, EnableAlarmActionsCommandOutput>;
    private serialize;
    private deserialize;
}
