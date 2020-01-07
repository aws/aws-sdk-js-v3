import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListHITsForQualificationTypeRequest, ListHITsForQualificationTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHITsForQualificationTypeCommandInput = ListHITsForQualificationTypeRequest;
export declare type ListHITsForQualificationTypeCommandOutput = ListHITsForQualificationTypeResponse & __MetadataBearer;
export declare class ListHITsForQualificationTypeCommand extends $Command<ListHITsForQualificationTypeCommandInput, ListHITsForQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListHITsForQualificationTypeCommandInput;
    constructor(input: ListHITsForQualificationTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHITsForQualificationTypeCommandInput, ListHITsForQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
