import { MachineLearningClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MachineLearningClient";
import { DescribeEvaluationsInput, DescribeEvaluationsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEvaluationsCommandInput = DescribeEvaluationsInput;
export declare type DescribeEvaluationsCommandOutput = DescribeEvaluationsOutput & __MetadataBearer;
export declare class DescribeEvaluationsCommand extends $Command<DescribeEvaluationsCommandInput, DescribeEvaluationsCommandOutput, MachineLearningClientResolvedConfig> {
    readonly input: DescribeEvaluationsCommandInput;
    constructor(input: DescribeEvaluationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MachineLearningClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEvaluationsCommandInput, DescribeEvaluationsCommandOutput>;
    private serialize;
    private deserialize;
}
