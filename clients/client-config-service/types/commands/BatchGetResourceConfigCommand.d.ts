import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { BatchGetResourceConfigRequest, BatchGetResourceConfigResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetResourceConfigCommandInput = BatchGetResourceConfigRequest;
export declare type BatchGetResourceConfigCommandOutput = BatchGetResourceConfigResponse & __MetadataBearer;
export declare class BatchGetResourceConfigCommand extends $Command<BatchGetResourceConfigCommandInput, BatchGetResourceConfigCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: BatchGetResourceConfigCommandInput;
    constructor(input: BatchGetResourceConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetResourceConfigCommandInput, BatchGetResourceConfigCommandOutput>;
    private serialize;
    private deserialize;
}
