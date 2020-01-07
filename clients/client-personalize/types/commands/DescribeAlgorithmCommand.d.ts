import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { DescribeAlgorithmRequest, DescribeAlgorithmResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAlgorithmCommandInput = DescribeAlgorithmRequest;
export declare type DescribeAlgorithmCommandOutput = DescribeAlgorithmResponse & __MetadataBearer;
export declare class DescribeAlgorithmCommand extends $Command<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: DescribeAlgorithmCommandInput;
    constructor(input: DescribeAlgorithmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput>;
    private serialize;
    private deserialize;
}
