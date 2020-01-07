import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListReviewableHITsRequest, ListReviewableHITsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListReviewableHITsCommandInput = ListReviewableHITsRequest;
export declare type ListReviewableHITsCommandOutput = ListReviewableHITsResponse & __MetadataBearer;
export declare class ListReviewableHITsCommand extends $Command<ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListReviewableHITsCommandInput;
    constructor(input: ListReviewableHITsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReviewableHITsCommandInput, ListReviewableHITsCommandOutput>;
    private serialize;
    private deserialize;
}
