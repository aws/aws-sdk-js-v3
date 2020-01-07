import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { CreateDocumentClassifierRequest, CreateDocumentClassifierResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDocumentClassifierCommandInput = CreateDocumentClassifierRequest;
export declare type CreateDocumentClassifierCommandOutput = CreateDocumentClassifierResponse & __MetadataBearer;
export declare class CreateDocumentClassifierCommand extends $Command<CreateDocumentClassifierCommandInput, CreateDocumentClassifierCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: CreateDocumentClassifierCommandInput;
    constructor(input: CreateDocumentClassifierCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDocumentClassifierCommandInput, CreateDocumentClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
