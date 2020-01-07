import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DeleteAssessmentRunRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAssessmentRunCommandInput = DeleteAssessmentRunRequest;
export declare type DeleteAssessmentRunCommandOutput = __MetadataBearer;
export declare class DeleteAssessmentRunCommand extends $Command<DeleteAssessmentRunCommandInput, DeleteAssessmentRunCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DeleteAssessmentRunCommandInput;
    constructor(input: DeleteAssessmentRunCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssessmentRunCommandInput, DeleteAssessmentRunCommandOutput>;
    private serialize;
    private deserialize;
}
