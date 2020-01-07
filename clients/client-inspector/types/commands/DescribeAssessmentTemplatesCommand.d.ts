import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeAssessmentTemplatesRequest, DescribeAssessmentTemplatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAssessmentTemplatesCommandInput = DescribeAssessmentTemplatesRequest;
export declare type DescribeAssessmentTemplatesCommandOutput = DescribeAssessmentTemplatesResponse & __MetadataBearer;
export declare class DescribeAssessmentTemplatesCommand extends $Command<DescribeAssessmentTemplatesCommandInput, DescribeAssessmentTemplatesCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeAssessmentTemplatesCommandInput;
    constructor(input: DescribeAssessmentTemplatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAssessmentTemplatesCommandInput, DescribeAssessmentTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
