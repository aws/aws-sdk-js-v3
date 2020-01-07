import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeTagsType, TagsType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTagsCommandInput = DescribeTagsType;
export declare type DescribeTagsCommandOutput = TagsType & __MetadataBearer;
export declare class DescribeTagsCommand extends $Command<DescribeTagsCommandInput, DescribeTagsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeTagsCommandInput;
    constructor(input: DescribeTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput>;
    private serialize;
    private deserialize;
}
