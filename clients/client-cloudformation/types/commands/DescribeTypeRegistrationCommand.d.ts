import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeTypeRegistrationInput, DescribeTypeRegistrationOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTypeRegistrationCommandInput = DescribeTypeRegistrationInput;
export declare type DescribeTypeRegistrationCommandOutput = DescribeTypeRegistrationOutput & __MetadataBearer;
export declare class DescribeTypeRegistrationCommand extends $Command<DescribeTypeRegistrationCommandInput, DescribeTypeRegistrationCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeTypeRegistrationCommandInput;
    constructor(input: DescribeTypeRegistrationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTypeRegistrationCommandInput, DescribeTypeRegistrationCommandOutput>;
    private serialize;
    private deserialize;
}
