import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListWorkersWithQualificationTypeRequest, ListWorkersWithQualificationTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListWorkersWithQualificationTypeCommandInput = ListWorkersWithQualificationTypeRequest;
export declare type ListWorkersWithQualificationTypeCommandOutput = ListWorkersWithQualificationTypeResponse & __MetadataBearer;
export declare class ListWorkersWithQualificationTypeCommand extends $Command<ListWorkersWithQualificationTypeCommandInput, ListWorkersWithQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListWorkersWithQualificationTypeCommandInput;
    constructor(input: ListWorkersWithQualificationTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkersWithQualificationTypeCommandInput, ListWorkersWithQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
