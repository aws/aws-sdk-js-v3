import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreatePatchBaselineRequest, CreatePatchBaselineResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePatchBaselineCommandInput = CreatePatchBaselineRequest;
export declare type CreatePatchBaselineCommandOutput = CreatePatchBaselineResult & __MetadataBearer;
export declare class CreatePatchBaselineCommand extends $Command<CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: CreatePatchBaselineCommandInput;
    constructor(input: CreatePatchBaselineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
