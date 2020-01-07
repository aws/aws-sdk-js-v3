import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentTargetsRequest, ListAssessmentTargetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssessmentTargetsCommandInput = ListAssessmentTargetsRequest;
export declare type ListAssessmentTargetsCommandOutput = ListAssessmentTargetsResponse & __MetadataBearer;
export declare class ListAssessmentTargetsCommand extends $Command<ListAssessmentTargetsCommandInput, ListAssessmentTargetsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListAssessmentTargetsCommandInput;
    constructor(input: ListAssessmentTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssessmentTargetsCommandInput, ListAssessmentTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
