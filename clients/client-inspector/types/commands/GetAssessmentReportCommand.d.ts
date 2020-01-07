import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { GetAssessmentReportRequest, GetAssessmentReportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAssessmentReportCommandInput = GetAssessmentReportRequest;
export declare type GetAssessmentReportCommandOutput = GetAssessmentReportResponse & __MetadataBearer;
export declare class GetAssessmentReportCommand extends $Command<GetAssessmentReportCommandInput, GetAssessmentReportCommandOutput, InspectorClientResolvedConfig> {
    readonly input: GetAssessmentReportCommandInput;
    constructor(input: GetAssessmentReportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssessmentReportCommandInput, GetAssessmentReportCommandOutput>;
    private serialize;
    private deserialize;
}
