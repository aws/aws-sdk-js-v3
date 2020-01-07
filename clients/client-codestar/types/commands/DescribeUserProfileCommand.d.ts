import { CodeStarClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeStarClient";
import { DescribeUserProfileRequest, DescribeUserProfileResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUserProfileCommandInput = DescribeUserProfileRequest;
export declare type DescribeUserProfileCommandOutput = DescribeUserProfileResult & __MetadataBearer;
export declare class DescribeUserProfileCommand extends $Command<DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput, CodeStarClientResolvedConfig> {
    readonly input: DescribeUserProfileCommandInput;
    constructor(input: DescribeUserProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeStarClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput>;
    private serialize;
    private deserialize;
}
