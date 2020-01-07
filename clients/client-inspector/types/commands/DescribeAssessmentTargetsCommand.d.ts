import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentTargetsRequest, DescribeAssessmentTargetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAssessmentTargetsCommandInput = DescribeAssessmentTargetsRequest;
export declare type DescribeAssessmentTargetsCommandOutput = DescribeAssessmentTargetsResponse & __MetadataBearer;
export declare class DescribeAssessmentTargetsCommand extends $Command<DescribeAssessmentTargetsCommandInput, DescribeAssessmentTargetsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeAssessmentTargetsCommandInput;
    constructor(input: DescribeAssessmentTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssessmentTargetsCommandInput, DescribeAssessmentTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
