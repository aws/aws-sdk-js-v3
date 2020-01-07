import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetDeploymentsInput, BatchGetDeploymentsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetDeploymentsCommandInput = BatchGetDeploymentsInput;
export declare type BatchGetDeploymentsCommandOutput = BatchGetDeploymentsOutput & __MetadataBearer;
export declare class BatchGetDeploymentsCommand extends $Command<BatchGetDeploymentsCommandInput, BatchGetDeploymentsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetDeploymentsCommandInput;
    constructor(input: BatchGetDeploymentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetDeploymentsCommandInput, BatchGetDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
