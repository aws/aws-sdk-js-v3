import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { CreateAssessmentTemplateRequest, CreateAssessmentTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAssessmentTemplateCommandInput = CreateAssessmentTemplateRequest;
export declare type CreateAssessmentTemplateCommandOutput = CreateAssessmentTemplateResponse & __MetadataBearer;
export declare class CreateAssessmentTemplateCommand extends $Command<CreateAssessmentTemplateCommandInput, CreateAssessmentTemplateCommandOutput, InspectorClientResolvedConfig> {
    readonly input: CreateAssessmentTemplateCommandInput;
    constructor(input: CreateAssessmentTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAssessmentTemplateCommandInput, CreateAssessmentTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
