import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { BatchDetectSyntaxRequest, BatchDetectSyntaxResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDetectSyntaxCommandInput = BatchDetectSyntaxRequest;
export declare type BatchDetectSyntaxCommandOutput = BatchDetectSyntaxResponse & __MetadataBearer;
export declare class BatchDetectSyntaxCommand extends $Command<BatchDetectSyntaxCommandInput, BatchDetectSyntaxCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: BatchDetectSyntaxCommandInput;
    constructor(input: BatchDetectSyntaxCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDetectSyntaxCommandInput, BatchDetectSyntaxCommandOutput>;
    private serialize;
    private deserialize;
}
