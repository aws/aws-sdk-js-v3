import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DeleteAssessmentTemplateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAssessmentTemplateCommandInput = DeleteAssessmentTemplateRequest;
export declare type DeleteAssessmentTemplateCommandOutput = __MetadataBearer;
export declare class DeleteAssessmentTemplateCommand extends $Command<DeleteAssessmentTemplateCommandInput, DeleteAssessmentTemplateCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DeleteAssessmentTemplateCommandInput;
    constructor(input: DeleteAssessmentTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssessmentTemplateCommandInput, DeleteAssessmentTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
