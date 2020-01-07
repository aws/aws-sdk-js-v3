import { ResourceGroupsTaggingAPIClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResourceGroupsTaggingAPIClient";
import { DescribeReportCreationInput, DescribeReportCreationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeReportCreationCommandInput = DescribeReportCreationInput;
export declare type DescribeReportCreationCommandOutput = DescribeReportCreationOutput & __MetadataBearer;
export declare class DescribeReportCreationCommand extends $Command<DescribeReportCreationCommandInput, DescribeReportCreationCommandOutput, ResourceGroupsTaggingAPIClientResolvedConfig> {
    readonly input: DescribeReportCreationCommandInput;
    constructor(input: DescribeReportCreationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ResourceGroupsTaggingAPIClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeReportCreationCommandInput, DescribeReportCreationCommandOutput>;
    private serialize;
    private deserialize;
}
