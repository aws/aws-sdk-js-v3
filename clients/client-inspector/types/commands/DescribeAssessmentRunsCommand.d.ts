import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentRunsRequest, DescribeAssessmentRunsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAssessmentRunsCommandInput = DescribeAssessmentRunsRequest;
export declare type DescribeAssessmentRunsCommandOutput = DescribeAssessmentRunsResponse & __MetadataBearer;
export declare class DescribeAssessmentRunsCommand extends $Command<DescribeAssessmentRunsCommandInput, DescribeAssessmentRunsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeAssessmentRunsCommandInput;
    constructor(input: DescribeAssessmentRunsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssessmentRunsCommandInput, DescribeAssessmentRunsCommandOutput>;
    private serialize;
    private deserialize;
}
