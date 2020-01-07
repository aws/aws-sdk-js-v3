import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdatePatchBaselineRequest, UpdatePatchBaselineResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdatePatchBaselineCommandInput = UpdatePatchBaselineRequest;
export declare type UpdatePatchBaselineCommandOutput = UpdatePatchBaselineResult & __MetadataBearer;
export declare class UpdatePatchBaselineCommand extends $Command<UpdatePatchBaselineCommandInput, UpdatePatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: UpdatePatchBaselineCommandInput;
    constructor(input: UpdatePatchBaselineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePatchBaselineCommandInput, UpdatePatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
