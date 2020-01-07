import { ServiceInputTypes, ServiceOutputTypes, TextractClientResolvedConfig } from "../TextractClient";
import { StartDocumentTextDetectionRequest, StartDocumentTextDetectionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartDocumentTextDetectionCommandInput = StartDocumentTextDetectionRequest;
export declare type StartDocumentTextDetectionCommandOutput = StartDocumentTextDetectionResponse & __MetadataBearer;
export declare class StartDocumentTextDetectionCommand extends $Command<StartDocumentTextDetectionCommandInput, StartDocumentTextDetectionCommandOutput, TextractClientResolvedConfig> {
    readonly input: StartDocumentTextDetectionCommandInput;
    constructor(input: StartDocumentTextDetectionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TextractClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDocumentTextDetectionCommandInput, StartDocumentTextDetectionCommandOutput>;
    private serialize;
    private deserialize;
}
