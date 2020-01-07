import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { StartDeliveryStreamEncryptionInput, StartDeliveryStreamEncryptionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartDeliveryStreamEncryptionCommandInput = StartDeliveryStreamEncryptionInput;
export declare type StartDeliveryStreamEncryptionCommandOutput = StartDeliveryStreamEncryptionOutput & __MetadataBearer;
export declare class StartDeliveryStreamEncryptionCommand extends $Command<StartDeliveryStreamEncryptionCommandInput, StartDeliveryStreamEncryptionCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: StartDeliveryStreamEncryptionCommandInput;
    constructor(input: StartDeliveryStreamEncryptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDeliveryStreamEncryptionCommandInput, StartDeliveryStreamEncryptionCommandOutput>;
    private serialize;
    private deserialize;
}
