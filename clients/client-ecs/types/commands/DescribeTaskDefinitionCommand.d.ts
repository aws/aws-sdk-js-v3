import { ECSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECSClient";
import { DescribeTaskDefinitionRequest, DescribeTaskDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTaskDefinitionCommandInput = DescribeTaskDefinitionRequest;
export declare type DescribeTaskDefinitionCommandOutput = DescribeTaskDefinitionResponse & __MetadataBearer;
export declare class DescribeTaskDefinitionCommand extends $Command<DescribeTaskDefinitionCommandInput, DescribeTaskDefinitionCommandOutput, ECSClientResolvedConfig> {
    readonly input: DescribeTaskDefinitionCommandInput;
    constructor(input: DescribeTaskDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTaskDefinitionCommandInput, DescribeTaskDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
