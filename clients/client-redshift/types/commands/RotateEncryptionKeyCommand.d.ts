import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { RotateEncryptionKeyMessage, RotateEncryptionKeyResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RotateEncryptionKeyCommandInput = RotateEncryptionKeyMessage;
export declare type RotateEncryptionKeyCommandOutput = RotateEncryptionKeyResult & __MetadataBearer;
export declare class RotateEncryptionKeyCommand extends $Command<RotateEncryptionKeyCommandInput, RotateEncryptionKeyCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: RotateEncryptionKeyCommandInput;
    constructor(input: RotateEncryptionKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RotateEncryptionKeyCommandInput, RotateEncryptionKeyCommandOutput>;
    private serialize;
    private deserialize;
}
