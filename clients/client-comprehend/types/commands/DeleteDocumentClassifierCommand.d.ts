import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DeleteDocumentClassifierRequest, DeleteDocumentClassifierResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDocumentClassifierCommandInput = DeleteDocumentClassifierRequest;
export declare type DeleteDocumentClassifierCommandOutput = DeleteDocumentClassifierResponse & __MetadataBearer;
export declare class DeleteDocumentClassifierCommand extends $Command<DeleteDocumentClassifierCommandInput, DeleteDocumentClassifierCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DeleteDocumentClassifierCommandInput;
    constructor(input: DeleteDocumentClassifierCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDocumentClassifierCommandInput, DeleteDocumentClassifierCommandOutput>;
    private serialize;
    private deserialize;
}
