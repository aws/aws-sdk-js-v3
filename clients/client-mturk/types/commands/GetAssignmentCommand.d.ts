import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetAssignmentRequest, GetAssignmentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetAssignmentCommandInput = GetAssignmentRequest;
export declare type GetAssignmentCommandOutput = GetAssignmentResponse & __MetadataBearer;
export declare class GetAssignmentCommand extends $Command<GetAssignmentCommandInput, GetAssignmentCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetAssignmentCommandInput;
    constructor(input: GetAssignmentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetAssignmentCommandInput, GetAssignmentCommandOutput>;
    private serialize;
    private deserialize;
}
