import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { GetDefaultPatchBaselineRequest, GetDefaultPatchBaselineResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetDefaultPatchBaselineCommandInput = GetDefaultPatchBaselineRequest;
export declare type GetDefaultPatchBaselineCommandOutput = GetDefaultPatchBaselineResult & __MetadataBearer;
export declare class GetDefaultPatchBaselineCommand extends $Command<GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: GetDefaultPatchBaselineCommandInput;
    constructor(input: GetDefaultPatchBaselineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
