import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetPatchBaselineRequest, GetPatchBaselineResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPatchBaselineCommandInput = GetPatchBaselineRequest;
export declare type GetPatchBaselineCommandOutput = GetPatchBaselineResult & __MetadataBearer;
export declare class GetPatchBaselineCommand extends $Command<GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetPatchBaselineCommandInput;
    constructor(input: GetPatchBaselineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
