import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeScalingParametersRequest, DescribeScalingParametersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScalingParametersCommandInput = DescribeScalingParametersRequest;
export declare type DescribeScalingParametersCommandOutput = DescribeScalingParametersResponse & __MetadataBearer;
export declare class DescribeScalingParametersCommand extends $Command<DescribeScalingParametersCommandInput, DescribeScalingParametersCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeScalingParametersCommandInput;
    constructor(input: DescribeScalingParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScalingParametersCommandInput, DescribeScalingParametersCommandOutput>;
    private serialize;
    private deserialize;
}
