import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateDocumentDefaultVersionRequest, UpdateDocumentDefaultVersionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDocumentDefaultVersionCommandInput = UpdateDocumentDefaultVersionRequest;
export declare type UpdateDocumentDefaultVersionCommandOutput = UpdateDocumentDefaultVersionResult & __MetadataBearer;
export declare class UpdateDocumentDefaultVersionCommand extends $Command<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdateDocumentDefaultVersionCommandInput;
    constructor(input: UpdateDocumentDefaultVersionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput>;
    private serialize;
    private deserialize;
}
