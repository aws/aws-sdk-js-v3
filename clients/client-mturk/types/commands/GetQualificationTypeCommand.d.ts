import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetQualificationTypeRequest, GetQualificationTypeResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetQualificationTypeCommandInput = GetQualificationTypeRequest;
export declare type GetQualificationTypeCommandOutput = GetQualificationTypeResponse & __MetadataBearer;
export declare class GetQualificationTypeCommand extends $Command<GetQualificationTypeCommandInput, GetQualificationTypeCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetQualificationTypeCommandInput;
    constructor(input: GetQualificationTypeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQualificationTypeCommandInput, GetQualificationTypeCommandOutput>;
    private serialize;
    private deserialize;
}
