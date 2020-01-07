import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeEndpointGroupRequest, DescribeEndpointGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEndpointGroupCommandInput = DescribeEndpointGroupRequest;
export declare type DescribeEndpointGroupCommandOutput = DescribeEndpointGroupResponse & __MetadataBearer;
export declare class DescribeEndpointGroupCommand extends $Command<DescribeEndpointGroupCommandInput, DescribeEndpointGroupCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeEndpointGroupCommandInput;
    constructor(input: DescribeEndpointGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointGroupCommandInput, DescribeEndpointGroupCommandOutput>;
    private serialize;
    private deserialize;
}
