import { FirehoseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FirehoseClient";
import { CreateDeliveryStreamInput, CreateDeliveryStreamOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateDeliveryStreamCommandInput = CreateDeliveryStreamInput;
export declare type CreateDeliveryStreamCommandOutput = CreateDeliveryStreamOutput & __MetadataBearer;
export declare class CreateDeliveryStreamCommand extends $Command<CreateDeliveryStreamCommandInput, CreateDeliveryStreamCommandOutput, FirehoseClientResolvedConfig> {
    readonly input: CreateDeliveryStreamCommandInput;
    constructor(input: CreateDeliveryStreamCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FirehoseClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateDeliveryStreamCommandInput, CreateDeliveryStreamCommandOutput>;
    private serialize;
    private deserialize;
}
