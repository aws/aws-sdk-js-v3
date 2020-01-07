import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListReviewPolicyResultsForHITRequest, ListReviewPolicyResultsForHITResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListReviewPolicyResultsForHITCommandInput = ListReviewPolicyResultsForHITRequest;
export declare type ListReviewPolicyResultsForHITCommandOutput = ListReviewPolicyResultsForHITResponse & __MetadataBearer;
export declare class ListReviewPolicyResultsForHITCommand extends $Command<ListReviewPolicyResultsForHITCommandInput, ListReviewPolicyResultsForHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListReviewPolicyResultsForHITCommandInput;
    constructor(input: ListReviewPolicyResultsForHITCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReviewPolicyResultsForHITCommandInput, ListReviewPolicyResultsForHITCommandOutput>;
    private serialize;
    private deserialize;
}
