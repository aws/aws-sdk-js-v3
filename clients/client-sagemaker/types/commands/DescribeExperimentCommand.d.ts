import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeExperimentRequest, DescribeExperimentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeExperimentCommandInput = DescribeExperimentRequest;
export declare type DescribeExperimentCommandOutput = DescribeExperimentResponse & __MetadataBearer;
export declare class DescribeExperimentCommand extends $Command<DescribeExperimentCommandInput, DescribeExperimentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeExperimentCommandInput;
    constructor(input: DescribeExperimentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExperimentCommandInput, DescribeExperimentCommandOutput>;
    private serialize;
    private deserialize;
}
