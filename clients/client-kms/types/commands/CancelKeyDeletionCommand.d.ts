import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { CancelKeyDeletionRequest, CancelKeyDeletionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelKeyDeletionCommandInput = CancelKeyDeletionRequest;
export declare type CancelKeyDeletionCommandOutput = CancelKeyDeletionResponse & __MetadataBearer;
export declare class CancelKeyDeletionCommand extends $Command<CancelKeyDeletionCommandInput, CancelKeyDeletionCommandOutput, KMSClientResolvedConfig> {
    readonly input: CancelKeyDeletionCommandInput;
    constructor(input: CancelKeyDeletionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelKeyDeletionCommandInput, CancelKeyDeletionCommandOutput>;
    private serialize;
    private deserialize;
}
