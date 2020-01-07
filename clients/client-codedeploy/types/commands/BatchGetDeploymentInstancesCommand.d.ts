import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetDeploymentInstancesInput, BatchGetDeploymentInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetDeploymentInstancesCommandInput = BatchGetDeploymentInstancesInput;
export declare type BatchGetDeploymentInstancesCommandOutput = BatchGetDeploymentInstancesOutput & __MetadataBearer;
export declare class BatchGetDeploymentInstancesCommand extends $Command<BatchGetDeploymentInstancesCommandInput, BatchGetDeploymentInstancesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetDeploymentInstancesCommandInput;
    constructor(input: BatchGetDeploymentInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetDeploymentInstancesCommandInput, BatchGetDeploymentInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
