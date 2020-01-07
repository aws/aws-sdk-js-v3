import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { GetDocumentTextDetectionRequest, GetDocumentTextDetectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDocumentTextDetectionCommandInput = GetDocumentTextDetectionRequest;
export declare type GetDocumentTextDetectionCommandOutput = GetDocumentTextDetectionResponse & __MetadataBearer;
export declare class GetDocumentTextDetectionCommand extends $Command<GetDocumentTextDetectionCommandInput, GetDocumentTextDetectionCommandOutput, TextractClientResolvedConfig> {
    readonly input: GetDocumentTextDetectionCommandInput;
    constructor(input: GetDocumentTextDetectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TextractClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDocumentTextDetectionCommandInput, GetDocumentTextDetectionCommandOutput>;
    private serialize;
    private deserialize;
}
