import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { UntagDeliveryStreamInput, UntagDeliveryStreamOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UntagDeliveryStreamCommandInput = UntagDeliveryStreamInput;
export declare type UntagDeliveryStreamCommandOutput = UntagDeliveryStreamOutput & __MetadataBearer;
export declare class UntagDeliveryStreamCommand extends $Command<UntagDeliveryStreamCommandInput, UntagDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: UntagDeliveryStreamCommandInput;
    constructor(input: UntagDeliveryStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagDeliveryStreamCommandInput, UntagDeliveryStreamCommandOutput>;
    private serialize;
    private deserialize;
}
