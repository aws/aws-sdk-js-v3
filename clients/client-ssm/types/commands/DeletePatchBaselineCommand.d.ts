import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DeletePatchBaselineRequest, DeletePatchBaselineResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePatchBaselineCommandInput = DeletePatchBaselineRequest;
export declare type DeletePatchBaselineCommandOutput = DeletePatchBaselineResult & __MetadataBearer;
export declare class DeletePatchBaselineCommand extends $Command<DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput, SSMClientResolvedConfig> {
    readonly input: DeletePatchBaselineCommandInput;
    constructor(input: DeletePatchBaselineCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput>;
    private serialize;
    private deserialize;
}
