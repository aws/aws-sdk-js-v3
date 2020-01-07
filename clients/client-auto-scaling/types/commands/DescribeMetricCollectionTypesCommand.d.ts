import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeMetricCollectionTypesAnswer } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMetricCollectionTypesCommandInput = {};
export declare type DescribeMetricCollectionTypesCommandOutput = DescribeMetricCollectionTypesAnswer & __MetadataBearer;
export declare class DescribeMetricCollectionTypesCommand extends $Command<DescribeMetricCollectionTypesCommandInput, DescribeMetricCollectionTypesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeMetricCollectionTypesCommandInput;
    constructor(input: DescribeMetricCollectionTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMetricCollectionTypesCommandInput, DescribeMetricCollectionTypesCommandOutput>;
    private serialize;
    private deserialize;
}
