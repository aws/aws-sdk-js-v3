import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInstancePatchesRequest, DescribeInstancePatchesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstancePatchesCommandInput = DescribeInstancePatchesRequest;
export declare type DescribeInstancePatchesCommandOutput = DescribeInstancePatchesResult & __MetadataBearer;
export declare class DescribeInstancePatchesCommand extends $Command<DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInstancePatchesCommandInput;
    constructor(input: DescribeInstancePatchesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput>;
    private serialize;
    private deserialize;
}
