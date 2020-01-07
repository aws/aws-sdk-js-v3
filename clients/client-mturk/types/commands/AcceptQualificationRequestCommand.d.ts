import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { AcceptQualificationRequestRequest, AcceptQualificationRequestResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AcceptQualificationRequestCommandInput = AcceptQualificationRequestRequest;
export declare type AcceptQualificationRequestCommandOutput = AcceptQualificationRequestResponse & __MetadataBearer;
export declare class AcceptQualificationRequestCommand extends $Command<AcceptQualificationRequestCommandInput, AcceptQualificationRequestCommandOutput, MTurkClientResolvedConfig> {
    readonly input: AcceptQualificationRequestCommandInput;
    constructor(input: AcceptQualificationRequestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AcceptQualificationRequestCommandInput, AcceptQualificationRequestCommandOutput>;
    private serialize;
    private deserialize;
}
