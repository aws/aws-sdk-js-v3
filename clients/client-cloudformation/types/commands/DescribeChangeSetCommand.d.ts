import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeChangeSetInput, DescribeChangeSetOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeChangeSetCommandInput = DescribeChangeSetInput;
export declare type DescribeChangeSetCommandOutput = DescribeChangeSetOutput & __MetadataBearer;
export declare class DescribeChangeSetCommand extends $Command<DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeChangeSetCommandInput;
    constructor(input: DescribeChangeSetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput>;
    private serialize;
    private deserialize;
}
