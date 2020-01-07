import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DescribeEventTopicsRequest, DescribeEventTopicsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventTopicsCommandInput = DescribeEventTopicsRequest;
export declare type DescribeEventTopicsCommandOutput = DescribeEventTopicsResult & __MetadataBearer;
export declare class DescribeEventTopicsCommand extends $Command<DescribeEventTopicsCommandInput, DescribeEventTopicsCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DescribeEventTopicsCommandInput;
    constructor(input: DescribeEventTopicsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventTopicsCommandInput, DescribeEventTopicsCommandOutput>;
    private serialize;
    private deserialize;
}
