import { KinesisClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisClient";
import { StartStreamEncryptionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartStreamEncryptionCommandInput = StartStreamEncryptionInput;
export declare type StartStreamEncryptionCommandOutput = __MetadataBearer;
export declare class StartStreamEncryptionCommand extends $Command<StartStreamEncryptionCommandInput, StartStreamEncryptionCommandOutput, KinesisClientResolvedConfig> {
    readonly input: StartStreamEncryptionCommandInput;
    constructor(input: StartStreamEncryptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartStreamEncryptionCommandInput, StartStreamEncryptionCommandOutput>;
    private serialize;
    private deserialize;
}
