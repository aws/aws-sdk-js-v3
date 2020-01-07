import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInstancePatchStatesForPatchGroupRequest, DescribeInstancePatchStatesForPatchGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeInstancePatchStatesForPatchGroupCommandInput = DescribeInstancePatchStatesForPatchGroupRequest;
export declare type DescribeInstancePatchStatesForPatchGroupCommandOutput = DescribeInstancePatchStatesForPatchGroupResult & __MetadataBearer;
export declare class DescribeInstancePatchStatesForPatchGroupCommand extends $Command<DescribeInstancePatchStatesForPatchGroupCommandInput, DescribeInstancePatchStatesForPatchGroupCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInstancePatchStatesForPatchGroupCommandInput;
    constructor(input: DescribeInstancePatchStatesForPatchGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstancePatchStatesForPatchGroupCommandInput, DescribeInstancePatchStatesForPatchGroupCommandOutput>;
    private serialize;
    private deserialize;
}
