import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListAssignmentsForHITRequest, ListAssignmentsForHITResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAssignmentsForHITCommandInput = ListAssignmentsForHITRequest;
export declare type ListAssignmentsForHITCommandOutput = ListAssignmentsForHITResponse & __MetadataBearer;
export declare class ListAssignmentsForHITCommand extends $Command<ListAssignmentsForHITCommandInput, ListAssignmentsForHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListAssignmentsForHITCommandInput;
    constructor(input: ListAssignmentsForHITCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssignmentsForHITCommandInput, ListAssignmentsForHITCommandOutput>;
    private serialize;
    private deserialize;
}
