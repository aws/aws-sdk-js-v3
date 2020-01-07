import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { RegisterDefaultPatchBaselineRequest, RegisterDefaultPatchBaselineResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RegisterDefaultPatchBaselineCommandInput = RegisterDefaultPatchBaselineRequest;
export declare type RegisterDefaultPatchBaselineCommandOutput = RegisterDefaultPatchBaselineResult & __MetadataBearer;
export declare class RegisterDefaultPatchBaselineCommand extends $Command<RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: RegisterDefaultPatchBaselineCommandInput;
    constructor(input: RegisterDefaultPatchBaselineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
