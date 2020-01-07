import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { BatchRevokePermissionsRequest, BatchRevokePermissionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchRevokePermissionsCommandInput = BatchRevokePermissionsRequest;
export declare type BatchRevokePermissionsCommandOutput = BatchRevokePermissionsResponse & __MetadataBearer;
export declare class BatchRevokePermissionsCommand extends $Command<BatchRevokePermissionsCommandInput, BatchRevokePermissionsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: BatchRevokePermissionsCommandInput;
    constructor(input: BatchRevokePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchRevokePermissionsCommandInput, BatchRevokePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
