import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ApproveAssignmentRequest, ApproveAssignmentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ApproveAssignmentCommandInput = ApproveAssignmentRequest;
export declare type ApproveAssignmentCommandOutput = ApproveAssignmentResponse & __MetadataBearer;
export declare class ApproveAssignmentCommand extends $Command<ApproveAssignmentCommandInput, ApproveAssignmentCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ApproveAssignmentCommandInput;
    constructor(input: ApproveAssignmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ApproveAssignmentCommandInput, ApproveAssignmentCommandOutput>;
    private serialize;
    private deserialize;
}
