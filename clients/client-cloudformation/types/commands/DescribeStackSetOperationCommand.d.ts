import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackSetOperationInput, DescribeStackSetOperationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackSetOperationCommandInput = DescribeStackSetOperationInput;
export declare type DescribeStackSetOperationCommandOutput = DescribeStackSetOperationOutput & __MetadataBearer;
export declare class DescribeStackSetOperationCommand extends $Command<DescribeStackSetOperationCommandInput, DescribeStackSetOperationCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeStackSetOperationCommandInput;
    constructor(input: DescribeStackSetOperationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackSetOperationCommandInput, DescribeStackSetOperationCommandOutput>;
    private serialize;
    private deserialize;
}
