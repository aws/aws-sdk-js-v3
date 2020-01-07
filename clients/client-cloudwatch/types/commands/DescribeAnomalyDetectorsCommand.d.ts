import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DescribeAnomalyDetectorsInput, DescribeAnomalyDetectorsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAnomalyDetectorsCommandInput = DescribeAnomalyDetectorsInput;
export declare type DescribeAnomalyDetectorsCommandOutput = DescribeAnomalyDetectorsOutput & __MetadataBearer;
export declare class DescribeAnomalyDetectorsCommand extends $Command<DescribeAnomalyDetectorsCommandInput, DescribeAnomalyDetectorsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: DescribeAnomalyDetectorsCommandInput;
    constructor(input: DescribeAnomalyDetectorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAnomalyDetectorsCommandInput, DescribeAnomalyDetectorsCommandOutput>;
    private serialize;
    private deserialize;
}
