import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { StartAssessmentRunRequest, StartAssessmentRunResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartAssessmentRunCommandInput = StartAssessmentRunRequest;
export declare type StartAssessmentRunCommandOutput = StartAssessmentRunResponse & __MetadataBearer;
export declare class StartAssessmentRunCommand extends $Command<StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput, InspectorClientResolvedConfig> {
    readonly input: StartAssessmentRunCommandInput;
    constructor(input: StartAssessmentRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartAssessmentRunCommandInput, StartAssessmentRunCommandOutput>;
    private serialize;
    private deserialize;
}
