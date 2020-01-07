import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { PutRecordBatchInput, PutRecordBatchOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutRecordBatchCommandInput = PutRecordBatchInput;
export declare type PutRecordBatchCommandOutput = PutRecordBatchOutput & __MetadataBearer;
export declare class PutRecordBatchCommand extends $Command<PutRecordBatchCommandInput, PutRecordBatchCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: PutRecordBatchCommandInput;
    constructor(input: PutRecordBatchCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRecordBatchCommandInput, PutRecordBatchCommandOutput>;
    private serialize;
    private deserialize;
}
