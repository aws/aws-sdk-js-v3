import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetTriggersRequest, BatchGetTriggersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetTriggersCommandInput = BatchGetTriggersRequest;
export declare type BatchGetTriggersCommandOutput = BatchGetTriggersResponse & __MetadataBearer;
export declare class BatchGetTriggersCommand extends $Command<BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetTriggersCommandInput;
    constructor(input: BatchGetTriggersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetTriggersCommandInput, BatchGetTriggersCommandOutput>;
    private serialize;
    private deserialize;
}
