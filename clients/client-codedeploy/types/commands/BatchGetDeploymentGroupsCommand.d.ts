import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetDeploymentGroupsInput, BatchGetDeploymentGroupsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetDeploymentGroupsCommandInput = BatchGetDeploymentGroupsInput;
export declare type BatchGetDeploymentGroupsCommandOutput = BatchGetDeploymentGroupsOutput & __MetadataBearer;
export declare class BatchGetDeploymentGroupsCommand extends $Command<BatchGetDeploymentGroupsCommandInput, BatchGetDeploymentGroupsCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetDeploymentGroupsCommandInput;
    constructor(input: BatchGetDeploymentGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetDeploymentGroupsCommandInput, BatchGetDeploymentGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
