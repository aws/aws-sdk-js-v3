import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutMetricAlarmInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutMetricAlarmCommandInput = PutMetricAlarmInput;
export declare type PutMetricAlarmCommandOutput = __MetadataBearer;
export declare class PutMetricAlarmCommand extends $Command<PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: PutMetricAlarmCommandInput;
    constructor(input: PutMetricAlarmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput>;
    private serialize;
    private deserialize;
}
