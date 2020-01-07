import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeEndpointRequest, DescribeEndpointResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEndpointCommandInput = DescribeEndpointRequest;
export declare type DescribeEndpointCommandOutput = DescribeEndpointResponse & __MetadataBearer;
export declare class DescribeEndpointCommand extends $Command<DescribeEndpointCommandInput, DescribeEndpointCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeEndpointCommandInput;
    constructor(input: DescribeEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointCommandInput, DescribeEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
