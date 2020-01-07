import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeAcceleratorRequest, DescribeAcceleratorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAcceleratorCommandInput = DescribeAcceleratorRequest;
export declare type DescribeAcceleratorCommandOutput = DescribeAcceleratorResponse & __MetadataBearer;
export declare class DescribeAcceleratorCommand extends $Command<DescribeAcceleratorCommandInput, DescribeAcceleratorCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeAcceleratorCommandInput;
    constructor(input: DescribeAcceleratorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAcceleratorCommandInput, DescribeAcceleratorCommandOutput>;
    private serialize;
    private deserialize;
}
