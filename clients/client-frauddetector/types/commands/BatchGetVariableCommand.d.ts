import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { BatchGetVariableRequest, BatchGetVariableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetVariableCommandInput = BatchGetVariableRequest;
export declare type BatchGetVariableCommandOutput = BatchGetVariableResult & __MetadataBearer;
export declare class BatchGetVariableCommand extends $Command<BatchGetVariableCommandInput, BatchGetVariableCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: BatchGetVariableCommandInput;
    constructor(input: BatchGetVariableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetVariableCommandInput, BatchGetVariableCommandOutput>;
    private serialize;
    private deserialize;
}
