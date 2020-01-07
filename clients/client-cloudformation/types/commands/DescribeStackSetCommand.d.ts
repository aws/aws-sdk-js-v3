import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackSetInput, DescribeStackSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackSetCommandInput = DescribeStackSetInput;
export declare type DescribeStackSetCommandOutput = DescribeStackSetOutput & __MetadataBearer;
export declare class DescribeStackSetCommand extends $Command<DescribeStackSetCommandInput, DescribeStackSetCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeStackSetCommandInput;
    constructor(input: DescribeStackSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackSetCommandInput, DescribeStackSetCommandOutput>;
    private serialize;
    private deserialize;
}
