import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeEffectivePatchesForPatchBaselineRequest, DescribeEffectivePatchesForPatchBaselineResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEffectivePatchesForPatchBaselineCommandInput = DescribeEffectivePatchesForPatchBaselineRequest;
export declare type DescribeEffectivePatchesForPatchBaselineCommandOutput = DescribeEffectivePatchesForPatchBaselineResult & __MetadataBearer;
export declare class DescribeEffectivePatchesForPatchBaselineCommand extends $Command<DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeEffectivePatchesForPatchBaselineCommandInput;
    constructor(input: DescribeEffectivePatchesForPatchBaselineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
