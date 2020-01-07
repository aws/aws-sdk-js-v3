import { CostandUsageReportServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostandUsageReportServiceClient";
import { DescribeReportDefinitionsRequest, DescribeReportDefinitionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReportDefinitionsCommandInput = DescribeReportDefinitionsRequest;
export declare type DescribeReportDefinitionsCommandOutput = DescribeReportDefinitionsResponse & __MetadataBearer;
export declare class DescribeReportDefinitionsCommand extends $Command<DescribeReportDefinitionsCommandInput, DescribeReportDefinitionsCommandOutput, CostandUsageReportServiceClientResolvedConfig> {
    readonly input: DescribeReportDefinitionsCommandInput;
    constructor(input: DescribeReportDefinitionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CostandUsageReportServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReportDefinitionsCommandInput, DescribeReportDefinitionsCommandOutput>;
    private serialize;
    private deserialize;
}
