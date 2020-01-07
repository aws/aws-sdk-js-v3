import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { SetAlarmStateInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetAlarmStateCommandInput = SetAlarmStateInput;
export declare type SetAlarmStateCommandOutput = __MetadataBearer;
export declare class SetAlarmStateCommand extends $Command<SetAlarmStateCommandInput, SetAlarmStateCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: SetAlarmStateCommandInput;
    constructor(input: SetAlarmStateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetAlarmStateCommandInput, SetAlarmStateCommandOutput>;
    private serialize;
    private deserialize;
}
