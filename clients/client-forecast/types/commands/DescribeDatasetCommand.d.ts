import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DescribeDatasetRequest, DescribeDatasetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeDatasetCommandInput = DescribeDatasetRequest;
export declare type DescribeDatasetCommandOutput = DescribeDatasetResponse & __MetadataBearer;
export declare class DescribeDatasetCommand extends $Command<DescribeDatasetCommandInput, DescribeDatasetCommandOutput, forecastClientResolvedConfig> {
    readonly input: DescribeDatasetCommandInput;
    constructor(input: DescribeDatasetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeDatasetCommandInput, DescribeDatasetCommandOutput>;
    private serialize;
    private deserialize;
}
