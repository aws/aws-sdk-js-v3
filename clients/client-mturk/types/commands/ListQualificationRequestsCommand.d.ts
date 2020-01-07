import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListQualificationRequestsRequest, ListQualificationRequestsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListQualificationRequestsCommandInput = ListQualificationRequestsRequest;
export declare type ListQualificationRequestsCommandOutput = ListQualificationRequestsResponse & __MetadataBearer;
export declare class ListQualificationRequestsCommand extends $Command<ListQualificationRequestsCommandInput, ListQualificationRequestsCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListQualificationRequestsCommandInput;
    constructor(input: ListQualificationRequestsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQualificationRequestsCommandInput, ListQualificationRequestsCommandOutput>;
    private serialize;
    private deserialize;
}
