import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateQualificationTypeRequest, UpdateQualificationTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateQualificationTypeCommandInput = UpdateQualificationTypeRequest;
export declare type UpdateQualificationTypeCommandOutput = UpdateQualificationTypeResponse & __MetadataBearer;
export declare class UpdateQualificationTypeCommand extends $Command<UpdateQualificationTypeCommandInput, UpdateQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: UpdateQualificationTypeCommandInput;
    constructor(input: UpdateQualificationTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateQualificationTypeCommandInput, UpdateQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
