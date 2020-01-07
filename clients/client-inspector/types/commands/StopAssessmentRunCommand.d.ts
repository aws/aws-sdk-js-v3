import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { StopAssessmentRunRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopAssessmentRunCommandInput = StopAssessmentRunRequest;
export declare type StopAssessmentRunCommandOutput = __MetadataBearer;
export declare class StopAssessmentRunCommand extends $Command<StopAssessmentRunCommandInput, StopAssessmentRunCommandOutput, InspectorClientResolvedConfig> {
    readonly input: StopAssessmentRunCommandInput;
    constructor(input: StopAssessmentRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAssessmentRunCommandInput, StopAssessmentRunCommandOutput>;
    private serialize;
    private deserialize;
}
