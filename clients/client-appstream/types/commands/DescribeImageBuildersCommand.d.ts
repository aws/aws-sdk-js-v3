import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeImageBuildersRequest, DescribeImageBuildersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeImageBuildersCommandInput = DescribeImageBuildersRequest;
export declare type DescribeImageBuildersCommandOutput = DescribeImageBuildersResult & __MetadataBearer;
export declare class DescribeImageBuildersCommand extends $Command<DescribeImageBuildersCommandInput, DescribeImageBuildersCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DescribeImageBuildersCommandInput;
    constructor(input: DescribeImageBuildersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImageBuildersCommandInput, DescribeImageBuildersCommandOutput>;
    private serialize;
    private deserialize;
}
