import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentRunAgentsRequest, ListAssessmentRunAgentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssessmentRunAgentsCommandInput = ListAssessmentRunAgentsRequest;
export declare type ListAssessmentRunAgentsCommandOutput = ListAssessmentRunAgentsResponse & __MetadataBearer;
export declare class ListAssessmentRunAgentsCommand extends $Command<ListAssessmentRunAgentsCommandInput, ListAssessmentRunAgentsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListAssessmentRunAgentsCommandInput;
    constructor(input: ListAssessmentRunAgentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssessmentRunAgentsCommandInput, ListAssessmentRunAgentsCommandOutput>;
    private serialize;
    private deserialize;
}
