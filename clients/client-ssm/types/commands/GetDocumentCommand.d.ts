import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetDocumentRequest, GetDocumentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDocumentCommandInput = GetDocumentRequest;
export declare type GetDocumentCommandOutput = GetDocumentResult & __MetadataBearer;
export declare class GetDocumentCommand extends $Command<GetDocumentCommandInput, GetDocumentCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetDocumentCommandInput;
    constructor(input: GetDocumentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDocumentCommandInput, GetDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
