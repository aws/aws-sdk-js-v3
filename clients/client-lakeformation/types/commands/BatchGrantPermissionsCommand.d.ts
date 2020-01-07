import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { BatchGrantPermissionsRequest, BatchGrantPermissionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BatchGrantPermissionsCommandInput = BatchGrantPermissionsRequest;
export declare type BatchGrantPermissionsCommandOutput = BatchGrantPermissionsResponse & __MetadataBearer;
export declare class BatchGrantPermissionsCommand extends $Command<BatchGrantPermissionsCommandInput, BatchGrantPermissionsCommandOutput, LakeFormationClientResolvedConfig> {
    readonly input: BatchGrantPermissionsCommandInput;
    constructor(input: BatchGrantPermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LakeFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchGrantPermissionsCommandInput, BatchGrantPermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
