import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { StopDeliveryStreamEncryptionInput, StopDeliveryStreamEncryptionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopDeliveryStreamEncryptionCommandInput = StopDeliveryStreamEncryptionInput;
export declare type StopDeliveryStreamEncryptionCommandOutput = StopDeliveryStreamEncryptionOutput & __MetadataBearer;
export declare class StopDeliveryStreamEncryptionCommand extends $Command<StopDeliveryStreamEncryptionCommandInput, StopDeliveryStreamEncryptionCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: StopDeliveryStreamEncryptionCommandInput;
    constructor(input: StopDeliveryStreamEncryptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopDeliveryStreamEncryptionCommandInput, StopDeliveryStreamEncryptionCommandOutput>;
    private serialize;
    private deserialize;
}
