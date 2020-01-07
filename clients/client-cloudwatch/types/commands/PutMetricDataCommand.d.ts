import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutMetricDataInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutMetricDataCommandInput = PutMetricDataInput;
export declare type PutMetricDataCommandOutput = __MetadataBearer;
export declare class PutMetricDataCommand extends $Command<PutMetricDataCommandInput, PutMetricDataCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: PutMetricDataCommandInput;
    constructor(input: PutMetricDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutMetricDataCommandInput, PutMetricDataCommandOutput>;
    private serialize;
    private deserialize;
}
