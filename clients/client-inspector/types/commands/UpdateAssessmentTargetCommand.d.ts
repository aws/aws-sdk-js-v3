import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { UpdateAssessmentTargetRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAssessmentTargetCommandInput = UpdateAssessmentTargetRequest;
export declare type UpdateAssessmentTargetCommandOutput = __MetadataBearer;
export declare class UpdateAssessmentTargetCommand extends $Command<UpdateAssessmentTargetCommandInput, UpdateAssessmentTargetCommandOutput, InspectorClientResolvedConfig> {
    readonly input: UpdateAssessmentTargetCommandInput;
    constructor(input: UpdateAssessmentTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAssessmentTargetCommandInput, UpdateAssessmentTargetCommandOutput>;
    private serialize;
    private deserialize;
}
