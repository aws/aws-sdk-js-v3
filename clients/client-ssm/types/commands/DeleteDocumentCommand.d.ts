import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeleteDocumentRequest, DeleteDocumentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDocumentCommandInput = DeleteDocumentRequest;
export declare type DeleteDocumentCommandOutput = DeleteDocumentResult & __MetadataBearer;
export declare class DeleteDocumentCommand extends $Command<DeleteDocumentCommandInput, DeleteDocumentCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeleteDocumentCommandInput;
    constructor(input: DeleteDocumentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDocumentCommandInput, DeleteDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
