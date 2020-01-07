import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListAssessmentTemplatesRequest, ListAssessmentTemplatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssessmentTemplatesCommandInput = ListAssessmentTemplatesRequest;
export declare type ListAssessmentTemplatesCommandOutput = ListAssessmentTemplatesResponse & __MetadataBearer;
export declare class ListAssessmentTemplatesCommand extends $Command<ListAssessmentTemplatesCommandInput, ListAssessmentTemplatesCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListAssessmentTemplatesCommandInput;
    constructor(input: ListAssessmentTemplatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssessmentTemplatesCommandInput, ListAssessmentTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
