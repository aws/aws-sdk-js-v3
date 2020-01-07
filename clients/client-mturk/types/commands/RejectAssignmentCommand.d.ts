import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { RejectAssignmentRequest, RejectAssignmentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectAssignmentCommandInput = RejectAssignmentRequest;
export declare type RejectAssignmentCommandOutput = RejectAssignmentResponse & __MetadataBearer;
export declare class RejectAssignmentCommand extends $Command<RejectAssignmentCommandInput, RejectAssignmentCommandOutput, MTurkClientResolvedConfig> {
    readonly input: RejectAssignmentCommandInput;
    constructor(input: RejectAssignmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectAssignmentCommandInput, RejectAssignmentCommandOutput>;
    private serialize;
    private deserialize;
}
