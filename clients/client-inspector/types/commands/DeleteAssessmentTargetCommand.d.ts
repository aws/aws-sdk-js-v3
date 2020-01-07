import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DeleteAssessmentTargetRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAssessmentTargetCommandInput = DeleteAssessmentTargetRequest;
export declare type DeleteAssessmentTargetCommandOutput = __MetadataBearer;
export declare class DeleteAssessmentTargetCommand extends $Command<DeleteAssessmentTargetCommandInput, DeleteAssessmentTargetCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DeleteAssessmentTargetCommandInput;
    constructor(input: DeleteAssessmentTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAssessmentTargetCommandInput, DeleteAssessmentTargetCommandOutput>;
    private serialize;
    private deserialize;
}
