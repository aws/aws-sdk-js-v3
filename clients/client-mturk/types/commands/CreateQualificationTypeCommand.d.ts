import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateQualificationTypeRequest, CreateQualificationTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateQualificationTypeCommandInput = CreateQualificationTypeRequest;
export declare type CreateQualificationTypeCommandOutput = CreateQualificationTypeResponse & __MetadataBearer;
export declare class CreateQualificationTypeCommand extends $Command<CreateQualificationTypeCommandInput, CreateQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateQualificationTypeCommandInput;
    constructor(input: CreateQualificationTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateQualificationTypeCommandInput, CreateQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
