import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetFileUploadURLRequest, GetFileUploadURLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetFileUploadURLCommandInput = GetFileUploadURLRequest;
export declare type GetFileUploadURLCommandOutput = GetFileUploadURLResponse & __MetadataBearer;
export declare class GetFileUploadURLCommand extends $Command<GetFileUploadURLCommandInput, GetFileUploadURLCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetFileUploadURLCommandInput;
    constructor(input: GetFileUploadURLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFileUploadURLCommandInput, GetFileUploadURLCommandOutput>;
    private serialize;
    private deserialize;
}
