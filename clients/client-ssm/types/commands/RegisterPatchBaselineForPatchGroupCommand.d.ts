import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { RegisterPatchBaselineForPatchGroupRequest, RegisterPatchBaselineForPatchGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterPatchBaselineForPatchGroupCommandInput = RegisterPatchBaselineForPatchGroupRequest;
export declare type RegisterPatchBaselineForPatchGroupCommandOutput = RegisterPatchBaselineForPatchGroupResult & __MetadataBearer;
export declare class RegisterPatchBaselineForPatchGroupCommand extends $Command<RegisterPatchBaselineForPatchGroupCommandInput, RegisterPatchBaselineForPatchGroupCommandOutput, SSMClientResolvedConfig> {
    readonly input: RegisterPatchBaselineForPatchGroupCommandInput;
    constructor(input: RegisterPatchBaselineForPatchGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterPatchBaselineForPatchGroupCommandInput, RegisterPatchBaselineForPatchGroupCommandOutput>;
    private serialize;
    private deserialize;
}
