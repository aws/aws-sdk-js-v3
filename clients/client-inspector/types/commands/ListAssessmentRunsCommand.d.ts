import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentRunsRequest, ListAssessmentRunsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssessmentRunsCommandInput = ListAssessmentRunsRequest;
export declare type ListAssessmentRunsCommandOutput = ListAssessmentRunsResponse & __MetadataBearer;
export declare class ListAssessmentRunsCommand extends $Command<ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListAssessmentRunsCommandInput;
    constructor(input: ListAssessmentRunsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssessmentRunsCommandInput, ListAssessmentRunsCommandOutput>;
    private serialize;
    private deserialize;
}
