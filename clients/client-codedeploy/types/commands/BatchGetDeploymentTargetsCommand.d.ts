import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetDeploymentTargetsInput, BatchGetDeploymentTargetsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetDeploymentTargetsCommandInput = BatchGetDeploymentTargetsInput;
export declare type BatchGetDeploymentTargetsCommandOutput = BatchGetDeploymentTargetsOutput & __MetadataBearer;
export declare class BatchGetDeploymentTargetsCommand extends $Command<BatchGetDeploymentTargetsCommandInput, BatchGetDeploymentTargetsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetDeploymentTargetsCommandInput;
    constructor(input: BatchGetDeploymentTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetDeploymentTargetsCommandInput, BatchGetDeploymentTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
