import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeTagsMessage, TaggedResourceListMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTagsCommandInput = DescribeTagsMessage;
export declare type DescribeTagsCommandOutput = TaggedResourceListMessage & __MetadataBearer;
export declare class DescribeTagsCommand extends $Command<DescribeTagsCommandInput, DescribeTagsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeTagsCommandInput;
    constructor(input: DescribeTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput>;
    private serialize;
    private deserialize;
}
