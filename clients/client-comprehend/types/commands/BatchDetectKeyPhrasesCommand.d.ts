import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { BatchDetectKeyPhrasesRequest, BatchDetectKeyPhrasesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDetectKeyPhrasesCommandInput = BatchDetectKeyPhrasesRequest;
export declare type BatchDetectKeyPhrasesCommandOutput = BatchDetectKeyPhrasesResponse & __MetadataBearer;
export declare class BatchDetectKeyPhrasesCommand extends $Command<BatchDetectKeyPhrasesCommandInput, BatchDetectKeyPhrasesCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: BatchDetectKeyPhrasesCommandInput;
    constructor(input: BatchDetectKeyPhrasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDetectKeyPhrasesCommandInput, BatchDetectKeyPhrasesCommandOutput>;
    private serialize;
    private deserialize;
}
