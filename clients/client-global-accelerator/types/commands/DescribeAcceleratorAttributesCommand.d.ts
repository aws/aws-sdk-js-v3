import { GlobalAcceleratorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlobalAcceleratorClient";
import { DescribeAcceleratorAttributesRequest, DescribeAcceleratorAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAcceleratorAttributesCommandInput = DescribeAcceleratorAttributesRequest;
export declare type DescribeAcceleratorAttributesCommandOutput = DescribeAcceleratorAttributesResponse & __MetadataBearer;
export declare class DescribeAcceleratorAttributesCommand extends $Command<DescribeAcceleratorAttributesCommandInput, DescribeAcceleratorAttributesCommandOutput, GlobalAcceleratorClientResolvedConfig> {
    readonly input: DescribeAcceleratorAttributesCommandInput;
    constructor(input: DescribeAcceleratorAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlobalAcceleratorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAcceleratorAttributesCommandInput, DescribeAcceleratorAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
