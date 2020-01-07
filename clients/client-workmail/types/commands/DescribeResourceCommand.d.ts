import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DescribeResourceRequest, DescribeResourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeResourceCommandInput = DescribeResourceRequest;
export declare type DescribeResourceCommandOutput = DescribeResourceResponse & __MetadataBearer;
export declare class DescribeResourceCommand extends $Command<DescribeResourceCommandInput, DescribeResourceCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DescribeResourceCommandInput;
    constructor(input: DescribeResourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResourceCommandInput, DescribeResourceCommandOutput>;
    private serialize;
    private deserialize;
}
