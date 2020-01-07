import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeregisterPatchBaselineForPatchGroupRequest, DeregisterPatchBaselineForPatchGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeregisterPatchBaselineForPatchGroupCommandInput = DeregisterPatchBaselineForPatchGroupRequest;
export declare type DeregisterPatchBaselineForPatchGroupCommandOutput = DeregisterPatchBaselineForPatchGroupResult & __MetadataBearer;
export declare class DeregisterPatchBaselineForPatchGroupCommand extends $Command<DeregisterPatchBaselineForPatchGroupCommandInput, DeregisterPatchBaselineForPatchGroupCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeregisterPatchBaselineForPatchGroupCommandInput;
    constructor(input: DeregisterPatchBaselineForPatchGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeregisterPatchBaselineForPatchGroupCommandInput, DeregisterPatchBaselineForPatchGroupCommandOutput>;
    private serialize;
    private deserialize;
}
