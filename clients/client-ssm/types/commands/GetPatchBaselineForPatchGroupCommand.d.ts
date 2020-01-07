import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetPatchBaselineForPatchGroupRequest, GetPatchBaselineForPatchGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPatchBaselineForPatchGroupCommandInput = GetPatchBaselineForPatchGroupRequest;
export declare type GetPatchBaselineForPatchGroupCommandOutput = GetPatchBaselineForPatchGroupResult & __MetadataBearer;
export declare class GetPatchBaselineForPatchGroupCommand extends $Command<GetPatchBaselineForPatchGroupCommandInput, GetPatchBaselineForPatchGroupCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetPatchBaselineForPatchGroupCommandInput;
    constructor(input: GetPatchBaselineForPatchGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPatchBaselineForPatchGroupCommandInput, GetPatchBaselineForPatchGroupCommandOutput>;
    private serialize;
    private deserialize;
}
