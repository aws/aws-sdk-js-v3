import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeAppRequest, DescribeAppResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAppCommandInput = DescribeAppRequest;
export declare type DescribeAppCommandOutput = DescribeAppResponse & __MetadataBearer;
export declare class DescribeAppCommand extends $Command<DescribeAppCommandInput, DescribeAppCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeAppCommandInput;
    constructor(input: DescribeAppCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAppCommandInput, DescribeAppCommandOutput>;
    private serialize;
    private deserialize;
}
