import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchGetRepositoriesInput, BatchGetRepositoriesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetRepositoriesCommandInput = BatchGetRepositoriesInput;
export declare type BatchGetRepositoriesCommandOutput = BatchGetRepositoriesOutput & __MetadataBearer;
export declare class BatchGetRepositoriesCommand extends $Command<BatchGetRepositoriesCommandInput, BatchGetRepositoriesCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: BatchGetRepositoriesCommandInput;
    constructor(input: BatchGetRepositoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetRepositoriesCommandInput, BatchGetRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}
