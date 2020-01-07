import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { BatchCreateVariableRequest, BatchCreateVariableResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchCreateVariableCommandInput = BatchCreateVariableRequest;
export declare type BatchCreateVariableCommandOutput = BatchCreateVariableResult & __MetadataBearer;
export declare class BatchCreateVariableCommand extends $Command<BatchCreateVariableCommandInput, BatchCreateVariableCommandOutput, FraudDetectorClientResolvedConfig> {
    readonly input: BatchCreateVariableCommandInput;
    constructor(input: BatchCreateVariableCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FraudDetectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchCreateVariableCommandInput, BatchCreateVariableCommandOutput>;
    private serialize;
    private deserialize;
}
