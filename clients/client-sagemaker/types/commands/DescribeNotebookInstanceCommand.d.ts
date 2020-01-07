import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeNotebookInstanceInput, DescribeNotebookInstanceOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNotebookInstanceCommandInput = DescribeNotebookInstanceInput;
export declare type DescribeNotebookInstanceCommandOutput = DescribeNotebookInstanceOutput & __MetadataBearer;
export declare class DescribeNotebookInstanceCommand extends $Command<DescribeNotebookInstanceCommandInput, DescribeNotebookInstanceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeNotebookInstanceCommandInput;
    constructor(input: DescribeNotebookInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNotebookInstanceCommandInput, DescribeNotebookInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
