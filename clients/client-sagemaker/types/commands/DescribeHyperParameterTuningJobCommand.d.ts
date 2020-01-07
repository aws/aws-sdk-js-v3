import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeHyperParameterTuningJobRequest, DescribeHyperParameterTuningJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHyperParameterTuningJobCommandInput = DescribeHyperParameterTuningJobRequest;
export declare type DescribeHyperParameterTuningJobCommandOutput = DescribeHyperParameterTuningJobResponse & __MetadataBearer;
export declare class DescribeHyperParameterTuningJobCommand extends $Command<DescribeHyperParameterTuningJobCommandInput, DescribeHyperParameterTuningJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeHyperParameterTuningJobCommandInput;
    constructor(input: DescribeHyperParameterTuningJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHyperParameterTuningJobCommandInput, DescribeHyperParameterTuningJobCommandOutput>;
    private serialize;
    private deserialize;
}
