import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { RejectQualificationRequestRequest, RejectQualificationRequestResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RejectQualificationRequestCommandInput = RejectQualificationRequestRequest;
export declare type RejectQualificationRequestCommandOutput = RejectQualificationRequestResponse & __MetadataBearer;
export declare class RejectQualificationRequestCommand extends $Command<RejectQualificationRequestCommandInput, RejectQualificationRequestCommandOutput, MTurkClientResolvedConfig> {
    readonly input: RejectQualificationRequestCommandInput;
    constructor(input: RejectQualificationRequestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RejectQualificationRequestCommandInput, RejectQualificationRequestCommandOutput>;
    private serialize;
    private deserialize;
}
