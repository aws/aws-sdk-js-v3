import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeNotebookInstanceLifecycleConfigInput, DescribeNotebookInstanceLifecycleConfigOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNotebookInstanceLifecycleConfigCommandInput = DescribeNotebookInstanceLifecycleConfigInput;
export declare type DescribeNotebookInstanceLifecycleConfigCommandOutput = DescribeNotebookInstanceLifecycleConfigOutput & __MetadataBearer;
export declare class DescribeNotebookInstanceLifecycleConfigCommand extends $Command<DescribeNotebookInstanceLifecycleConfigCommandInput, DescribeNotebookInstanceLifecycleConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeNotebookInstanceLifecycleConfigCommandInput;
    constructor(input: DescribeNotebookInstanceLifecycleConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNotebookInstanceLifecycleConfigCommandInput, DescribeNotebookInstanceLifecycleConfigCommandOutput>;
    private serialize;
    private deserialize;
}
