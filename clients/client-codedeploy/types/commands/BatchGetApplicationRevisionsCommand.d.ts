import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetApplicationRevisionsInput, BatchGetApplicationRevisionsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetApplicationRevisionsCommandInput = BatchGetApplicationRevisionsInput;
export declare type BatchGetApplicationRevisionsCommandOutput = BatchGetApplicationRevisionsOutput & __MetadataBearer;
export declare class BatchGetApplicationRevisionsCommand extends $Command<BatchGetApplicationRevisionsCommandInput, BatchGetApplicationRevisionsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetApplicationRevisionsCommandInput;
    constructor(input: BatchGetApplicationRevisionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetApplicationRevisionsCommandInput, BatchGetApplicationRevisionsCommandOutput>;
    private serialize;
    private deserialize;
}
