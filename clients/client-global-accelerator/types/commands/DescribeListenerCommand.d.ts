import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeListenerRequest, DescribeListenerResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeListenerCommandInput = DescribeListenerRequest;
export declare type DescribeListenerCommandOutput = DescribeListenerResponse & __MetadataBearer;
export declare class DescribeListenerCommand extends $Command<DescribeListenerCommandInput, DescribeListenerCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeListenerCommandInput;
    constructor(input: DescribeListenerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeListenerCommandInput, DescribeListenerCommandOutput>;
    private serialize;
    private deserialize;
}
