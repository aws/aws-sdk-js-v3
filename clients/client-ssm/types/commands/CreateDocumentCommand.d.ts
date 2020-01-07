import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateDocumentRequest, CreateDocumentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDocumentCommandInput = CreateDocumentRequest;
export declare type CreateDocumentCommandOutput = CreateDocumentResult & __MetadataBearer;
export declare class CreateDocumentCommand extends $Command<CreateDocumentCommandInput, CreateDocumentCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreateDocumentCommandInput;
    constructor(input: CreateDocumentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDocumentCommandInput, CreateDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
