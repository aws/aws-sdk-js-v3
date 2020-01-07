import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateAssessmentTargetRequest, CreateAssessmentTargetResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAssessmentTargetCommandInput = CreateAssessmentTargetRequest;
export declare type CreateAssessmentTargetCommandOutput = CreateAssessmentTargetResponse & __MetadataBearer;
export declare class CreateAssessmentTargetCommand extends $Command<CreateAssessmentTargetCommandInput, CreateAssessmentTargetCommandOutput, InspectorClientResolvedConfig> {
    readonly input: CreateAssessmentTargetCommandInput;
    constructor(input: CreateAssessmentTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAssessmentTargetCommandInput, CreateAssessmentTargetCommandOutput>;
    private serialize;
    private deserialize;
}
