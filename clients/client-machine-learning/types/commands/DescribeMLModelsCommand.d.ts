import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeMLModelsInput, DescribeMLModelsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMLModelsCommandInput = DescribeMLModelsInput;
export declare type DescribeMLModelsCommandOutput = DescribeMLModelsOutput & __MetadataBearer;
export declare class DescribeMLModelsCommand extends $Command<DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DescribeMLModelsCommandInput;
    constructor(input: DescribeMLModelsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput>;
    private serialize;
    private deserialize;
}
