import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { DescribeExclusionsRequest, DescribeExclusionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeExclusionsCommandInput = DescribeExclusionsRequest;
export declare type DescribeExclusionsCommandOutput = DescribeExclusionsResponse & __MetadataBearer;
export declare class DescribeExclusionsCommand extends $Command<DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput, InspectorClientResolvedConfig> {
    readonly input: DescribeExclusionsCommandInput;
    constructor(input: DescribeExclusionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeExclusionsCommandInput, DescribeExclusionsCommandOutput>;
    private serialize;
    private deserialize;
}
