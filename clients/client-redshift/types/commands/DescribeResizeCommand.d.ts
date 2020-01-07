import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeResizeMessage, ResizeProgressMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeResizeCommandInput = DescribeResizeMessage;
export declare type DescribeResizeCommandOutput = ResizeProgressMessage & __MetadataBearer;
export declare class DescribeResizeCommand extends $Command<DescribeResizeCommandInput, DescribeResizeCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeResizeCommandInput;
    constructor(input: DescribeResizeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeResizeCommandInput, DescribeResizeCommandOutput>;
    private serialize;
    private deserialize;
}
