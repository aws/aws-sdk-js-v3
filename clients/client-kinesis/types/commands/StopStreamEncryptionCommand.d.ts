import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { StopStreamEncryptionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopStreamEncryptionCommandInput = StopStreamEncryptionInput;
export declare type StopStreamEncryptionCommandOutput = __MetadataBearer;
export declare class StopStreamEncryptionCommand extends $Command<StopStreamEncryptionCommandInput, StopStreamEncryptionCommandOutput, KinesisClientResolvedConfig> {
    readonly input: StopStreamEncryptionCommandInput;
    constructor(input: StopStreamEncryptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopStreamEncryptionCommandInput, StopStreamEncryptionCommandOutput>;
    private serialize;
    private deserialize;
}
