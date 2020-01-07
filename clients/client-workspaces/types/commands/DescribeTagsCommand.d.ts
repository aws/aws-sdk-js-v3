import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { DescribeTagsRequest, DescribeTagsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTagsCommandInput = DescribeTagsRequest;
export declare type DescribeTagsCommandOutput = DescribeTagsResult & __MetadataBearer;
export declare class DescribeTagsCommand extends $Command<DescribeTagsCommandInput, DescribeTagsCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: DescribeTagsCommandInput;
    constructor(input: DescribeTagsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTagsCommandInput, DescribeTagsCommandOutput>;
    private serialize;
    private deserialize;
}
