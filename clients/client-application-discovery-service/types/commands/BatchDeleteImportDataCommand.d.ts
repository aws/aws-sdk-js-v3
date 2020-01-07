import { ApplicationDiscoveryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationDiscoveryServiceClient";
import { BatchDeleteImportDataRequest, BatchDeleteImportDataResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchDeleteImportDataCommandInput = BatchDeleteImportDataRequest;
export declare type BatchDeleteImportDataCommandOutput = BatchDeleteImportDataResponse & __MetadataBearer;
export declare class BatchDeleteImportDataCommand extends $Command<BatchDeleteImportDataCommandInput, BatchDeleteImportDataCommandOutput, ApplicationDiscoveryServiceClientResolvedConfig> {
    readonly input: BatchDeleteImportDataCommandInput;
    constructor(input: BatchDeleteImportDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationDiscoveryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDeleteImportDataCommandInput, BatchDeleteImportDataCommandOutput>;
    private serialize;
    private deserialize;
}
