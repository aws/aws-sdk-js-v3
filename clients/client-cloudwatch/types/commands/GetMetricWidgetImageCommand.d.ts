import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { GetMetricWidgetImageInput, GetMetricWidgetImageOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetMetricWidgetImageCommandInput = GetMetricWidgetImageInput;
export declare type GetMetricWidgetImageCommandOutput = GetMetricWidgetImageOutput & __MetadataBearer;
export declare class GetMetricWidgetImageCommand extends $Command<GetMetricWidgetImageCommandInput, GetMetricWidgetImageCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: GetMetricWidgetImageCommandInput;
    constructor(input: GetMetricWidgetImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMetricWidgetImageCommandInput, GetMetricWidgetImageCommandOutput>;
    private serialize;
    private deserialize;
}
