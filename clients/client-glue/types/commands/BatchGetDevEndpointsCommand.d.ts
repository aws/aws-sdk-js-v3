import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { BatchGetDevEndpointsRequest, BatchGetDevEndpointsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetDevEndpointsCommandInput = BatchGetDevEndpointsRequest;
export declare type BatchGetDevEndpointsCommandOutput = BatchGetDevEndpointsResponse & __MetadataBearer;
export declare class BatchGetDevEndpointsCommand extends $Command<BatchGetDevEndpointsCommandInput, BatchGetDevEndpointsCommandOutput, GlueClientResolvedConfig> {
    readonly input: BatchGetDevEndpointsCommandInput;
    constructor(input: BatchGetDevEndpointsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetDevEndpointsCommandInput, BatchGetDevEndpointsCommandOutput>;
    private serialize;
    private deserialize;
}
