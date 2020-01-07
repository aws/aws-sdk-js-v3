import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetOnPremisesInstancesInput, BatchGetOnPremisesInstancesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGetOnPremisesInstancesCommandInput = BatchGetOnPremisesInstancesInput;
export declare type BatchGetOnPremisesInstancesCommandOutput = BatchGetOnPremisesInstancesOutput & __MetadataBearer;
export declare class BatchGetOnPremisesInstancesCommand extends $Command<BatchGetOnPremisesInstancesCommandInput, BatchGetOnPremisesInstancesCommandOutput, CodeDeployClientResolvedConfig> {
    readonly input: BatchGetOnPremisesInstancesCommandInput;
    constructor(input: BatchGetOnPremisesInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeDeployClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGetOnPremisesInstancesCommandInput, BatchGetOnPremisesInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
