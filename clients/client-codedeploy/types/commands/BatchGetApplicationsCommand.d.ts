import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetApplicationsInput, BatchGetApplicationsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetApplicationsCommandInput = BatchGetApplicationsInput;
export declare type BatchGetApplicationsCommandOutput = BatchGetApplicationsOutput & __MetadataBearer;
export declare class BatchGetApplicationsCommand extends $Command<BatchGetApplicationsCommandInput, BatchGetApplicationsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetApplicationsCommandInput;
    constructor(input: BatchGetApplicationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetApplicationsCommandInput, BatchGetApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
