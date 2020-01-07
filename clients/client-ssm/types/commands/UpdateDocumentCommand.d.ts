import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateDocumentRequest, UpdateDocumentResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDocumentCommandInput = UpdateDocumentRequest;
export declare type UpdateDocumentCommandOutput = UpdateDocumentResult & __MetadataBearer;
export declare class UpdateDocumentCommand extends $Command<UpdateDocumentCommandInput, UpdateDocumentCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateDocumentCommandInput;
    constructor(input: UpdateDocumentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDocumentCommandInput, UpdateDocumentCommandOutput>;
    private serialize;
    private deserialize;
}
