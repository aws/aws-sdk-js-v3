import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInstancePatchStatesRequest, DescribeInstancePatchStatesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstancePatchStatesCommandInput = DescribeInstancePatchStatesRequest;
export declare type DescribeInstancePatchStatesCommandOutput = DescribeInstancePatchStatesResult & __MetadataBearer;
export declare class DescribeInstancePatchStatesCommand extends $Command<DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInstancePatchStatesCommandInput;
    constructor(input: DescribeInstancePatchStatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput>;
    private serialize;
    private deserialize;
}
